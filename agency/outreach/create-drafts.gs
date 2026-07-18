/**
 * Reelo — create all 25 morning outreach emails as Gmail drafts.
 *
 * NO SHEET NEEDED. The emails are built into this script.
 *
 * SETUP:
 * 1. Go to script.google.com > New project (or Extensions > Apps Script from any sheet).
 * 2. Delete whatever is there, paste this WHOLE file, click Save.
 * 3. Pick "createReeloDrafts" in the function dropdown, click Run.
 * 4. Approve the permission prompt the first time (it is your own account).
 * 5. Open Gmail > Drafts. All 25 are there, ready to review and send.
 */

var REELO_EMAILS = [
  {
    to: "hello@wondercide.com",
    subject: "Short video concepts for Wondercide",
    body: "Hello,\n\nI recently found Wondercide while researching natural pet care brands, and I think your products would work really well in creator style videos. Your plant based Flea & Tick Spray for pets and home is a real alternative to synthetic drops and pills. I could see a quick spritz the dog and the couch before a hike with no vet pill needed demo, a safe to spray around the kids peace of mind angle, and a satisfying cedar and lemongrass routine that owners can trust.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@weareplufl.com",
    subject: "Short form video ideas for Plufl",
    body: "Hello,\n\nI recently discovered Plufl while looking through lifestyle brands, and I immediately thought of a few creator style concepts. Your Original Human Dog Bed is basically made for content. I could see the comedic grown adult curls up in a dog bed reveal, a cozy work from home midday reset reel, and a doomscroll free nap moment where the visual is the whole hook.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "service@buddyrest.com",
    subject: "Short form video concepts for BuddyRest",
    body: "Hello,\n\nI came across BuddyRest while looking through pet products, and I immediately thought of a few video ideas that could help show your orthopedic dog beds in action. The memory foam bolster beds are built for senior and large breed dogs with joint pain. I could see an emotional my twelve year old lab finally sleeps through the night before and after, a chew proof durability torture test, and a look at how an achy old dog finally settles in.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@tuftandpaw.com",
    subject: "UGC video concepts for Tuft & Paw",
    body: "Hello,\n\nI was looking through Tuft & Paw and thought your products would work really well in short form videos because your cat furniture actually looks good in a styled home. Your modern cat trees, covered litter setups, and sculptural scratchers are a clear upgrade from ugly carpeted towers. I could see a cat furniture that fits your living room reveal, a behaviorist backed why your cat ignores its scratcher explainer, and a calm styling reel that fits a real space.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "careteam@catalystpet.com",
    subject: "Short video concepts for Catalyst Pet",
    body: "Hello,\n\nI recently found Catalyst Pet while researching pet brands, and I think your products would work really well in creator style videos. Your upcycled soft wood litter is lightweight, where one pound does the work of about four pounds of clay. I could see a satisfying lift the whole bag with one finger moment, a low dust pour that keeps the air clear, and a clean clump scoop with a bit of ASMR.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "sales@skoutshonor.com",
    subject: "Short form video ideas for Skout's Honor",
    body: "Hello,\n\nI recently discovered Skout's Honor while looking through pet grooming brands, and I immediately thought of a few creator style concepts. Your probiotic shampoo and hyaluronic acid grooming wipes are perfect for the stinky, itchy dog between full baths. I could see a quick wipe down and sniff test refresh, a sudsy bath to fluffy blowout transformation, and a before and after on a smelly coat that makes the payoff obvious.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "help@doggiedailies.com",
    subject: "Short form video concepts for Doggie Dailies",
    body: "Hello,\n\nI came across Doggie Dailies while looking through pet supplement products, and I immediately thought of a few video ideas that could help show your hip and joint chews in action. Your glucosamine soft chews and probiotic omega chews target stiffness and digestion. I could see a sprinkle it on dinner feeding time moment, a watch the zoomies come back in two weeks before and after, and a relatable older dog slowing down on walks story.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "media@davids-usa.com",
    subject: "UGC video concepts for Davids Natural Toothpaste",
    body: "Hello,\n\nI was looking through Davids and thought your products would work really well in short form videos because the packaging is so satisfying to show. Your clean ingredient toothpaste comes in a recyclable metal tube with the key roller included. I could see a satisfying roll the tube flat with the key squeeze, a metal tube ASMR morning routine swap, and a simple no plastic tube story that lets the design carry the video.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@elims.co",
    subject: "Short video concepts for ELIMS",
    body: "Hello,\n\nI recently found ELIMS while researching oral care brands, and I think your products would work really well in creator style videos. Your Reflection Toothpaste uses ten percent nano hydroxyapatite as a fluoride alternative that remineralizes enamel and cuts sensitivity. I could see a swap your paste and here is why morning routine, a two week sensitive teeth story, and a clean bathroom shelf reel built around the details.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@mail-nobsroutines.com",
    subject: "Short form video ideas for NOBS",
    body: "Hello,\n\nI recently discovered NOBS while looking through oral care brands, and I immediately thought of a few creator style concepts. Your nano hydroxyapatite toothpaste tablets are fluoride and plastic free in a glass jar. I could see the novel bite, brush, and foam demo, a TSA proof toothpaste travel angle, and a no more messy tubes swap that clears clutter off the counter.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@keekooil.com",
    subject: "Short form video concepts for Keeko",
    body: "Hello,\n\nI came across Keeko while looking through oral care products, and I immediately thought of a few video ideas that could help show your oral beauty ritual. Your copper tongue cleaner, coconut oil floss, and oil pulling sachets feel more like a beauty routine than a chore. I could see an aesthetic close up scrape, swish, and floss ritual, a premium packaging unboxing, and a fresh breath morning reset.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "returns@duotoothpaste.com",
    subject: "UGC video concepts for Duo Toothpaste",
    body: "Hello,\n\nI was looking through Duo and thought your products would work really well in short form videos because the format is so fun to show. Your nano hydroxyapatite tablets come in functional flavors like Energy, Sleep, and Immunity. I could see a drop a tablet, chew, and brush reveal, a which flavor for which time of day bit, and a plastic free bathroom swap that clears out the old tubes.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@thisisneeded.com",
    subject: "Short video concepts for Needed",
    body: "Hello,\n\nI recently found Needed while researching women's health brands, and I think your products would work really well in creator style videos. Your Prenatal Multi capsules and powder, plus your postpartum recovery support, speak to the nutrient gaps women hit through pregnancy. I could see a my daily prenatal stack powder scoop routine, a what no one tells you about postpartum recovery testimonial, and a calm morning wellness moment.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "partnerships@ourkindra.com",
    subject: "Short form video ideas for Kindra",
    body: "Hello,\n\nI recently discovered Kindra while looking through menopause support brands, and I immediately thought of a few creator style concepts. Your core capsules and Sleep supplement target hot flashes, brain fog, and night time wake ups without hormones. I could see a candid hot flashes to sleeping through the night testimonial, a real talk perimenopause routine, and a calming bedtime wind down that speaks straight to your audience.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@sandlandsleep.com",
    subject: "Short form video concepts for Sandland Sleep",
    body: "Hello,\n\nI came across Sandland Sleep while looking through sleep products, and I immediately thought of a few video ideas that could help show your dissolving sleep tablets in action. Your tablets are built on magnesium, valerian root, and L theanine, with melatonin free options. I could see a dissolve under the tongue bedtime wind down ritual, a racing mind to calm story, and a no more groggy melatonin hangover angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "support@season34.com",
    subject: "UGC video concepts for SEASON34",
    body: "Hello,\n\nI was looking through SEASON34 and thought your products would work really well in short form videos because the stackable system is so easy to explain. Your nine symptom targeted formulas cover Sleep, Mood and Memory, Hot Flash, and more. I could see a build your stack for exactly your symptoms explainer, a which formula matches how you feel walkthrough, and a real talk menopause routine that helps people find their fit.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "info@wilewomen.com",
    subject: "Short video concepts for Wile",
    body: "Hello,\n\nI recently found Wile while researching women's supplement brands, and I think your products would work really well in creator style videos. Your plant based formulas like Hot Flash and mood and stress support are made for women in perimenopause. I could see a midlife reset here is my daily move testimonial, a botanical what is actually in it close up, and a calm end of day ritual that leans into the herbal story.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "press@materialkitchen.com",
    subject: "UGC video concepts for Material Kitchen",
    body: "Hello,\n\nI was looking through Material Kitchen and thought your products would work really well in short form videos because the results are so easy to show. Your reBoard flexible cutting board funnels chopped veg straight into the pan, and the Iconics knife trio covers most home cuts. I could see a clean chop and scoop meal prep sequence with the board bending to pour, a first cut ASMR on a ripe tomato, and a swap your warped plastic boards story.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "help@fieldcompany.com",
    subject: "Short video concepts for Field Company",
    body: "Hello,\n\nI recently found Field Company while researching cast iron cookware brands, and I think your products would work really well in creator style videos. Your No.8 skillet is lighter and slicker than typical modern cast iron thanks to the machine smoothed surface. I could see an egg gliding across the polished pan, a steak sear reveal with a good crust, and a satisfying seasoning ritual that shows why it beats rough, sticky cast iron.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "gir@patternbrands.com",
    subject: "Short form video ideas for GIR",
    body: "Hello,\n\nI recently discovered GIR while looking through kitchen tool brands, and I immediately thought of a few creator style concepts. Your one piece Ultimate Spatula and Ultimate Flip are seamless, heat proof silicone in bright colorways. I could see a spatula flexing under a tall stack of pancakes, a clean colorful egg flip, and a why the seamless design stays cleaner demo that shows nothing gets stuck in a seam.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "marketing@hedleyb.com",
    subject: "Short form video concepts for Hedley & Bennett",
    body: "Hello,\n\nI came across Hedley & Bennett while looking through kitchen products, and I immediately thought of a few video ideas that could help show your Crossback apron in action. The apron is durable, pocketed, and adjustable, a genuine cook's workhorse. I could see a get ready to cook with me tie on, a sauce splatter that wipes right off, and a styled home chef reel that shows off the pockets for a towel and thermometer.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "support@xtrema.com",
    subject: "UGC video concepts for Xtrema",
    body: "Hello,\n\nI was looking through Xtrema and thought your products would work really well in short form videos because the payoff is so clear. Your pure ceramic skillets and saucepans have no PTFE or PFAS coating at all. I could see an egg sliding right out with a what is actually in your nonstick pan hook, a clean stovetop to plate demo, and a simple non toxic kitchen swap that lets the results carry the video.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "support@barebonesliving.com",
    subject: "Short video concepts for Barebones Living",
    body: "Hello,\n\nI recently found Barebones Living while researching outdoor cooking brands, and I think your products would work really well in creator style videos. Your cast iron, enamelware, and all in one open fire cook kits are built for backyard and camp cooking. I could see a cook over fire cast iron sequence, an enamelware camp breakfast styling reel, and a real meal outdoors without a full kitchen story.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "info@fifthandcherry.com",
    subject: "Short form video ideas for Fifth & Cherry",
    body: "Hello,\n\nI recently discovered Fifth & Cherry while looking through cutting board brands, and I immediately thought of a few creator style concepts. Your heirloom end grain cherry and walnut boards are made in the USA, along with your board oil and cream. I could see an oil and buff seasoning ritual with a bit of ASMR, a charcuterie build on the board, and a slow grain close up reveal that shows why it lasts for years.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
  {
    to: "info@cgco.co",
    subject: "Short form video concepts for Common Good",
    body: "Hello,\n\nI came across Common Good while looking through home cleaning products, and I immediately thought of a few video ideas that could help show your refill system in a natural way. Your plant based dish soap and all purpose cleaner come in minimalist glass bottles you top up from bulk. I could see a satisfying refill pour, a calming styled sink and shelf reel, and a swap out the plastic bottles story.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples of my work. You can also see more at reeloai.net. We could also go over pricing and what type of package would work best for your team.\n\nBest regards,\n\nCayden"
  },
];

function createReeloDrafts() {
  var made = 0;
  for (var i = 0; i < REELO_EMAILS.length; i++) {
    var e = REELO_EMAILS[i];
    if (!e.to || e.to.indexOf('@') === -1) { continue; }
    GmailApp.createDraft(e.to, e.subject, e.body);
    made++;
    Utilities.sleep(400);
  }
  Logger.log(made + ' drafts created. Check Gmail > Drafts.');
}
