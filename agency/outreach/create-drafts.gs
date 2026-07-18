/**
 * Reelo — turn a sheet of emails into Gmail drafts.
 *
 * Sheet must have a header row with these exact columns:
 *   Email Address | Subject | Body
 * (This is exactly what the batch CSV files use, so you can paste a CSV straight in.)
 *
 * SETUP (one time):
 * 1. Make a Google Sheet. Paste in one of the batch CSVs (File > Import, or just
 *    open the .csv and copy the cells). First row must be the header above.
 * 2. In the sheet: Extensions > Apps Script.
 * 3. Delete whatever is there, paste this whole file, click Save.
 * 4. Pick "createReeloDrafts" in the function dropdown, click Run.
 * 5. Approve the permission prompt the first time (it is your own account).
 * 6. Open Gmail > Drafts. Every row is now a draft, ready for you to send.
 *
 * To reuse for a new batch: clear the sheet, paste the new CSV, Run again.
 */
function createReeloDrafts() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  var made = 0;
  for (var i = 1; i < rows.length; i++) {        // skip header row
    var to = String(rows[i][0]).trim();
    var subject = String(rows[i][1]).trim();
    var body = String(rows[i][2]);
    if (!to || !subject) continue;               // skip blank rows
    GmailApp.createDraft(to, subject, body);
    made++;
    Utilities.sleep(400);                         // gentle pause so Gmail keeps up
  }
  SpreadsheetApp.getActiveSpreadsheet().toast(made + ' drafts created. Check Gmail > Drafts.');
  Logger.log(made + ' drafts created');
}
