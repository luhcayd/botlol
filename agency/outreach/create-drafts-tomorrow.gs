/**
 * Reelo — TOMORROW batch (batch F). Creates all 25 as Gmail drafts.
 * NO SHEET NEEDED. Paste into Apps Script, Save, pick createReeloTomorrowDrafts, Run.
 */

var REELO_TOMORROW = [
  {
    to: "hello@bachans.com",
    subject: "Short video concepts for Bachan's",
    body: "I recently found Bachan's while researching pantry and sauce brands, and I think your products would work really well in creator style videos. Your Original Japanese Barbecue Sauce is a pour, glaze, and go staple that makes weeknight dinners look amazing. I could see a glossy glaze pour over wings or salmon in slow motion, a five minute stir fry with one bottle demo, and a why it lives in my fridge door pantry staple story.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "info@omsom.com",
    subject: "Short form video ideas for Omsom",
    body: "I recently discovered Omsom while looking through pantry brands, and I immediately thought of a few creator style concepts. Your sauce starters pack restaurant level flavor into one pouch for dishes like pad thai and sisig. I could see a dinner in ten minutes with one starter cook along, a tear, pour, and toss demo, and a real flavors without the takeout price angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "talk2us@lesserevil.com",
    subject: "Short form video concepts for LesserEvil",
    body: "I came across LesserEvil while looking through snack products, and I immediately thought of a few video ideas that could help show your popcorn and puffs in action. Your Himalayan pink salt popcorn and Paleo Puffs use clean, simple ingredients. I could see a satisfying big bowl pour and crunch, a read the back only a few ingredients hook, and a snack that actually feels good pantry restock.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@snif.co",
    subject: "UGC video concepts for Snif",
    body: "I was looking through Snif and thought your products would work really well in short form videos because your try before you buy model is so easy to show. Your genderless fragrances like Sweet Ash and Golden Hour come with a home trial. I could see a first spray and honest reaction test, an unbox and sample the scent ritual, and a find your signature scent from your couch angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "help@usehuron.com",
    subject: "Short video concepts for Huron",
    body: "I recently found Huron while researching men's grooming brands, and I think your products would work really well in creator style videos. Your face wash, body wash, and moisturizer make a simple, no nonsense routine at a fair price. I could see a sixty second full body and face routine, a simplify your shower shelf swap, and a grooming that does not cost a fortune angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@actandacre.com",
    subject: "Short form video ideas for Act+Acre",
    body: "I recently discovered Act+Acre while looking through haircare brands, and I immediately thought of a few creator style concepts. Your cold pressed scalp serum and hair wellness system treat the scalp like skin. I could see a scalp detox before wash ritual, a why your scalp is the root of hair health explainer, and a dropper serum application close up that feels premium.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@starfaceworld.com",
    subject: "Short form video concepts for Starface",
    body: "I came across Starface while looking through skincare products, and I immediately thought of a few video ideas that could help show your pimple patches in action. Your yellow star Hydro-Stars turn a breakout into something fun to wear. I could see a get ready with me star patch moment, a satisfying peel and reveal before and after, and a turn a bad skin day into a cute one angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "help@dossier.co",
    subject: "UGC video concepts for Dossier",
    body: "I was looking through Dossier and thought your products would work really well in short form videos because the value story is so strong. Your fragrances recreate iconic luxury scents at a fraction of the price. I could see a blind smell test versus the designer bottle, a your new signature scent for less reveal, and an aesthetic vanity shelf styling reel.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "customerservice@gochirp.com",
    subject: "Short video concepts for Chirp",
    body: "I recently found Chirp while researching wellness and recovery brands, and I think your products would work really well in creator style videos. Your Chirp Wheels roll out back tension in a few minutes a day. I could see a satisfying back release moment, a desk worker end of day stretch routine, and a relief in five minutes before and after.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "support@drinktrade.com",
    subject: "Short form video ideas for Trade Coffee",
    body: "I recently discovered Trade Coffee while looking through coffee brands, and I immediately thought of a few creator style concepts. Your quiz matches people to fresh roasted beans from top roasters, shipped to the door. I could see a take the quiz and meet your match walkthrough, a fresh bag unboxing and first pour, and a level up your home coffee without a cafe angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "factory@fineandraw.com",
    subject: "Short form video concepts for Fine & Raw",
    body: "I came across Fine & Raw while looking through chocolate products, and I immediately thought of a few video ideas that could help show your bean to bar chocolate in action. Your small batch bars and spreads are crafted in Brooklyn with a rich, glossy finish. I could see a satisfying chocolate snap and melt close up, a behind the scenes bean to bar moment, and a gift worthy packaging unboxing.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@jackhenry.co",
    subject: "UGC video concepts for Jack Henry",
    body: "I was looking through Jack Henry and thought your products would work really well in short form videos because the routine is so easy to show. Your all natural hair, skin, and body products keep a clean, simple lineup for men. I could see a full routine from wash to style in under a minute, a natural ingredients you can actually pronounce hook, and a simplify your bathroom shelf swap.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "fam@immieats.com",
    subject: "Short video concepts for Immi",
    body: "I recently found Immi while researching better for you food brands, and I think your products would work really well in creator style videos. Your instant ramen is high protein and low carb without giving up the flavor. I could see a steamy three minute ramen cook and slurp, a nutrition label versus regular ramen comparison, and a late night bowl that still fits your macros angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "partnerships@drinkghia.com",
    subject: "Short form video ideas for Ghia",
    body: "I recently discovered Ghia while looking through non alcoholic drink brands, and I immediately thought of a few creator style concepts. Your Le Spritz and aperitif make a beautiful alcohol free happy hour. I could see a golden hour spritz pour over ice, a mocktail that feels grown up build, and a sober curious night in that still feels special.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "support@oseamalibu.com",
    subject: "Short form video concepts for Osea",
    body: "I came across Osea while looking through skincare products, and I immediately thought of a few video ideas that could help show your seaweed based skincare in action. Your Undaria Algae Body Oil and Ocean Cleanser lean on clean, marine ingredients. I could see a glowy body oil application after the shower, a slow self care Sunday ritual, and a that ocean glow before and after.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "lalofam@meetlalo.com",
    subject: "UGC video concepts for Lalo",
    body: "I was looking through Lalo and thought your products would work really well in short form videos because parents love seeing real gear in action. Your 3 in 1 high chair and play kit are built to grow with the kid and actually look good in a kitchen. I could see a high chair to toddler seat conversion demo, a mess free mealtime with a real toddler, and a nursery and kitchen styling reel.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "customerservice@momofuku.com",
    subject: "Short video concepts for Momofuku Goods",
    body: "I recently found Momofuku Goods while researching pantry and sauce brands, and I think your products would work really well in creator style videos. Your Chili Crunch and noodles bring bold, chef level flavor to a home kitchen. I could see a spoon chili crunch over everything montage, a two minute noodle upgrade cook along, and a satisfying crunchy chili oil pour close up.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hola@ceremonia.com",
    subject: "Short form video ideas for Ceremonia",
    body: "I recently discovered Ceremonia while looking through haircare brands, and I immediately thought of a few creator style concepts. Your Aceite de Moska hair oil and scalp masks are rooted in Latinx heritage and clean ingredients. I could see a pre wash oil scalp massage ritual, a wet to shiny air dry transformation, and a heritage and ingredient story that feels personal.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "support@herocosmetics.us",
    subject: "Short form video concepts for Hero Cosmetics",
    body: "I came across Hero Cosmetics while looking through skincare products, and I immediately thought of a few video ideas that could help show your Mighty Patch in action. Your hydrocolloid patches visibly flatten a pimple overnight. I could see an apply before bed and reveal in the morning before and after, a satisfying used patch reveal, and a your emergency breakout fix angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "info@drinkdesoi.com",
    subject: "UGC video concepts for De Soi",
    body: "I was looking through De Soi and thought your products would work really well in short form videos because the cans are so beautiful to show. Your sparkling non alcoholic ap\u00e9ritifs are made with natural adaptogens for a little calm without the alcohol. I could see a satisfying pour over ice with a garnish, a why I am drinking less this year angle, and a relax without the hangover moment.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "help@blueland.com",
    subject: "Short video concepts for Blueland",
    body: "I recently found Blueland while researching home cleaning brands, and I think your products would work really well in creator style videos. Your refillable cleaning tablets drop into a reusable bottle so you stop buying plastic. I could see a satisfying tablet fizz and dissolve, a swap your under the sink clutter reveal, and a refill instead of rebuy story.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@magicspoon.com",
    subject: "Short form video ideas for Magic Spoon",
    body: "I recently discovered Magic Spoon while looking through breakfast and snack brands, and I immediately thought of a few creator style concepts. Your high protein, low sugar cereal tastes like the childhood favorites without the crash. I could see a nostalgic pour milk and crunch moment, a nutrition label that does not look like cereal hook, and a late night bowl that actually fits your goals angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "concierge@flamingoestate.com",
    subject: "Short form video concepts for Flamingo Estate",
    body: "I came across Flamingo Estate while looking through luxury home and body products, and I immediately thought of a few video ideas that could help show your collection in action. Your garden grown soaps, candles, and pantry oils feel like a piece of the estate. I could see a rich lather bar soap ritual, a styled bath and vanity reel, and a slow luxury unboxing that leans into the packaging.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "hello@takearecess.com",
    subject: "UGC video concepts for Recess",
    body: "I was looking through Recess and thought your products would work really well in short form videos because the cans and colors are so eye catching. Your sparkling drinks with adaptogens and magnesium are made for calm and focus. I could see a mid day reset crack a can moment, a pastel flat lay styling reel, and a find your calm in a busy day angle.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
  {
    to: "letschat@kosas.com",
    subject: "Short video concepts for Kosas",
    body: "I recently found Kosas while researching clean makeup brands, and I think your products would work really well in creator style videos. Your Revealer concealer and Wet Lip Oil are skincare first makeup that looks like real skin. I could see a one product no makeup makeup look, a swipe and blend concealer close up, and a glowy get ready with me that shows the skin like finish.\n\nWould something like that be worth talking about?\n\nMy name is Cayden, and I create short product videos for social media and paid advertising. I handle the concept, script, visuals, voiceover, captions, and editing, so every video is ready to review and test.\n\nIf you're interested, I'd be happy to send over a few concepts and examples. You can see more of my work and start a project right at reeloai.net, and from there we can go over pricing and the package that fits your team best.\n\nBest regards,\n\nCayden"
  },
];

function createReeloTomorrowDrafts() {
  var made = 0;
  for (var i = 0; i < REELO_TOMORROW.length; i++) {
    var e = REELO_TOMORROW[i];
    if (!e.to || e.to.indexOf('@') === -1) { continue; }
    GmailApp.createDraft(e.to, e.subject, e.body);
    made++;
    Utilities.sleep(400);
  }
  Logger.log(made + ' tomorrow drafts created. Check Gmail > Drafts.');
}
