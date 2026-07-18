/**
 * Reelo — turn a sheet of emails into Gmail drafts.
 *
 * Your sheet needs a header row containing these three columns (any order):
 *   Email Address | Subject | Body
 * The batch CSV files already use those exact headers, so an import lines up.
 *
 * SETUP (one time):
 * 1. In your Google Sheet, make sure row 1 has the headers above. The cleanest
 *    way is File > Import > Upload the .csv > "Replace current sheet" so the
 *    multi-line bodies stay inside a single cell.
 * 2. Extensions > Apps Script.
 * 3. Delete whatever is there, paste this whole file, click Save.
 * 4. Pick "createReeloDrafts" in the function dropdown, click Run.
 * 5. Approve the permission prompt the first time (it is your own account).
 * 6. Open Gmail > Drafts. Every row is now a draft, ready for you to send.
 *
 * To reuse for a new batch: clear the sheet, import the new CSV, Run again.
 */
function createReeloDrafts() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  if (rows.length < 2) {
    SpreadsheetApp.getActiveSpreadsheet().toast('No data rows found.');
    return;
  }

  // Find each column by its header name, so column order does not matter.
  var header = rows[0].map(function (h) { return String(h).trim().toLowerCase(); });
  var emailCol = findCol(header, ['email address', 'email', 'to']);
  var subjCol = findCol(header, ['subject']);
  var bodyCol = findCol(header, ['body', 'message']);

  // Fallback: if there is no usable header, guess by content (cell with an @).
  if (emailCol === -1) {
    for (var c = 0; c < rows[1].length; c++) {
      if (String(rows[1][c]).indexOf('@') > -1) { emailCol = c; break; }
    }
    if (subjCol === -1) subjCol = (emailCol === 0) ? 1 : 0;
    if (bodyCol === -1) bodyCol = (emailCol === 2 || subjCol === 2) ? 1 : 2;
  }

  if (emailCol === -1 || subjCol === -1 || bodyCol === -1) {
    SpreadsheetApp.getActiveSpreadsheet().toast(
      'Could not find Email/Subject/Body columns. Check the header row.');
    return;
  }

  var made = 0, skipped = 0;
  for (var i = 1; i < rows.length; i++) {
    var to = String(rows[i][emailCol]).trim();
    var subject = String(rows[i][subjCol]).trim();
    var body = String(rows[i][bodyCol]);
    if (!to || !subject) { continue; }           // skip blank rows
    if (to.indexOf('@') === -1) { skipped++; continue; }  // not an email, skip
    GmailApp.createDraft(to, subject, body);
    made++;
    Utilities.sleep(400);                          // gentle pause so Gmail keeps up
  }

  var msg = made + ' drafts created. Check Gmail > Drafts.';
  if (skipped) { msg += ' (' + skipped + ' rows skipped — no valid email.)'; }
  SpreadsheetApp.getActiveSpreadsheet().toast(msg);
  Logger.log(msg);
}

function findCol(header, names) {
  for (var n = 0; n < names.length; n++) {
    var idx = header.indexOf(names[n]);
    if (idx > -1) { return idx; }
  }
  return -1;
}
