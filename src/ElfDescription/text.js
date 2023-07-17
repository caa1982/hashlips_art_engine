module.exports = returnRandomText = (textArrayName, attributes) => {
  const {
    tribe,
    name,
    magic,
    familiar,
    strength,
    agility,
    speed,
    luck,
    intelligence,
  } = attributes;

  const descriptions = [
    {
      tribe: "time travelers",
      texts: [
        `Hailing from the esteemed tribe of time-traveling elves, ${name} wields a unique set of skills that enable him to manipulate time and space. Guided by his wise and powerful familiar, a creature possessing immense intelligence and foresight, ${name} traverses the timestream with unparalleled ease and precision.`,
        `A member of the distinguished tribe of time-traveling elves, ${name} has refined an extraordinary talent for journeying through time. Equipped with a cutting-edge compass and an astute comprehension of time and space, ${name} expertly navigates the timestream with unmatched grace and accuracy. His devoted familiar, a swift and agile creature, remains a steadfast companion and trusted ally in his pursuit of unraveling time's enigmas.`,
        `Originating from the esteemed tribe of time-traveling elves, ${name} is a virtuoso in the realm of time travel, boasting an array of formidable abilities. His sophisticated technology and unrivaled knowledge of the timestream enable him to outwit even the most devious adversaries. Accompanied by his reliable familiar, an ingenious and intellectual creature, ${name} consistently remains a step ahead in his quest to uncover the secrets spanning past, present, and future.`,
        `Equipped with a remarkable skill set, ${name} is an accomplished time traveler hailing from the respected tribe of elves. His state-of-the-art compass and profound understanding of time and space allow him to traverse the timestream with finesse and precision. His unwavering familiar, a creature of immense magic and wonder, offers unwavering support and companionship as ${name} journeys through the epochs.`,
        `In a realm where time and space are ever-changing, ${name}, a proficient elf from the distinguished tribe of time-travelers, stands out due to his exceptional time-traveling abilities. Joined by his reliable familiar, a mighty creature with keen insight and intuition, ${name} gracefully and skillfully navigates the timestream's intricacies, endeavoring to decipher age-old mysteries and safeguard his tribe from temporal perils.`,
        `As a distinguished member of the tribe of time-traveling elves, ${name} displays an unrivaled comprehension of time and space's enigmas. Utilizing advanced technology and remarkable insight, he adeptly maneuvers through the timestream, guided by his devoted familiar - a swift and resourceful creature always prepared to offer support.`,
        `Emerging from the revered tribe of time-traveling elves, ${name} is a connoisseur of the art of time travel. His cutting-edge compass and acute awareness of the timestream enable him to journey through the ages with remarkable precision and expertise. Accompanied by his loyal familiar - a creature possessing immense power and intuition - he is a formidable presence within the temporal realm.`,
        `Employing unparalleled skill and futuristic technology, ${name} - a member of the esteemed tribe of time-traveling elves - is a veritable master of the timestream. His trustworthy familiar, a creature of profound wisdom and perception, acts as a steadfast companion and ally throughout their temporal adventures. Together, they effortlessly decipher the enigmas of time and space.`,
        `The distinguished tribe of time-traveling elves is home to ${name}, an adept and accomplished time traveler with a profound understanding of the timestream's intricacies. His futuristic compass and extensive array of abilities empower him to traverse time with astonishing speed and precision. With his unwavering familiar by his side - a creature of immense magic and wonder - he is an indomitable force within the temporal realm.`,
        `In the ever-changing realm of time and space, ${name} - a member of the illustrious tribe of time-traveling elves - is a true master of the timestream. Employing advanced technology and remarkable insight, he effortlessly moves through the ages with unmatched precision, always outpacing his adversaries. His reliable familiar, a creature of exceptional intelligence and intuition, serves as a valuable companion and ally during his journeys in the temporal domain.`,
      ],
    },
    {
      tribe: "tattooed",
      texts: [
        `Hailing from the esteemed tattooed tribe of elves, ${name} is a skilled and accomplished hunter whose unwavering resolve to protect his people is rivaled only by the brilliance of his tattoos. The intricate patterns pulse with a mesmerizing, otherworldly light, reflecting his exceptional prowess and courage. At his side, his loyal ${familiar} - a creature of remarkable agility and cunning - serves as a formidable ally in defending his tribe's homeland.`,
        `Emerging from the revered tattooed tribe of elves, ${name} has achieved legendary status as a hunter and guardian, deeply committed to the safety and well-being of his people. His tattoos radiate with vibrant neon hues that pierce the darkness, signifying his status as a paragon of his craft. With his devoted ${familiar} beside him - a creature of astonishing speed and power - he stands prepared to defend his tribe against any adversaries.`,
        `Nestled within the lush, expansive forests of the proud tattooed tribe of elves, ${name} is a resourceful and highly skilled hunter, feared by all who would endanger his people. His tattoos gleam with an otherworldly luminance, marking him as a fierce and tenacious warrior. Accompanying him, his steadfast ${familiar} - a potent and intelligent creature - serves as both a companion and a lethal instrument in the protection of his homeland.`,
        `As a distinguished member of the illustrious tattooed tribe of elves, ${name} is revered as a master hunter and guardian, whose expertise and bravery are matched only by the splendor of his tattoos. The vivid, neon colors that dance across his skin symbolize his dedication to his people, and his reliable ${familiar} - a creature of striking speed and agility - is a fearsome force in the defense of his homeland.`,
        `In a realm where cunning and skill determine survival, ${name} - a member of the tattooed tribe of elves - stands out as a true legend. His tattoos shimmer with an ethereal radiance, signifying him as a hunter of unparalleled capability and fearlessness. With his faithful ${familiar} by his side - a creature of extraordinary stealth and cunning - he pursues and captures the most elusive quarry in the forest, a genuine master of his art.`,
        `Originating from the ancient and respected tattooed tribe of elves, ${name} is a legendary hunter and protector of his people. His tattoos emit an otherworldly glow, mirroring his exceptional skill and bravery. Accompanied by his trusty ${familiar} - a creature of unrivaled strength and agility - he stands ready to defend his tribe's homeland from any menace.`,
        `Amid the verdant forests of the proud tattooed tribe of elves, ${name} is a formidable and highly skilled hunter, feared by all who would contest his people. His tattoos glisten with a dazzling neon glow, a testament to his unwavering dedication to his craft. Alongside his loyal ${familiar} - a creature of exceptional intelligence and swiftness - he is a powerful guardian of his tribe's domain.`,
        `A member of the venerable tattooed tribe of elves, ${name} excels as a master of the hunt and a defender of his people. His intricate tattoos radiate with an ethereal luminescence, symbolizing his unparalleled prowess and valor. His steadfast ${familiar} - a creature of extraordinary agility and resourcefulness - is a formidable force in the protection of his tribe's territory.`,
        `The ancient and esteemed tattooed tribe of elves is home to ${name}, a fierce and highly skilled hunter whose tattoos blaze with a pulsating, supernatural radiance. His exceptional skills and unyielding courage are complemented by his loyal ${familiar} - a creature of astonishing speed and cunning - who stands with him in the defense of his people's homeland.`,
        `Amidst the sprawling and vibrant woodlands of the tattooed tribe of elves, ${name} is a revered and accomplished hunter and protector. His tattoos emit a captivating luminescence, signifying his mastery of his craft. Accompanied by his trusted ${familiar} - a creature of unparalleled strength and agility - he serves as an unstoppable force in the defense of his tribe and its homeland.`,
      ],
    },
    {
      tribe: "scientist",
      texts: [
        `Hailing from the esteemed ${tribe} tribe of elves, ${name} is a skilled and ingenious inventor with a profound understanding of science and technology. His subterranean laboratory, brimming with advanced devices and equipment, stands as a testament to his creativity and expertise. His trusty ${familiar}, a creature of remarkable intelligence and sagacity, offers invaluable assistance and support in his pursuit of knowledge and innovation.`,
        `A member of the respected ${tribe} tribe of elves, ${name} is a talented and accomplished inventor with a deep comprehension of science and technology. His underground laboratories, equipped with cutting-edge technology, showcase his proficiency and inventiveness. His devoted ${familiar}, a creature of keen insight and perception, provides an indispensable source of support and companionship.`,
        `Amid the vast forests of the proud ${tribe} tribe of elves, ${name} is an innovative inventor with an extensive range of skills and knowledge. His subterranean laboratories, furnished with a plethora of advanced devices and equipment, exhibit his competence and imagination. His loyal ${familiar}, a creature of immense wisdom and intellect, serves as a steadfast companion and precious source of support.`,
        `As an integral part of the proud ${tribe} tribe of elves, ${name} boasts exceptional knowledge of science and technology. His groundbreaking inventions have significantly influenced life in the forest. His underground laboratories, replete with state-of-the-art equipment and devices, exemplify his resourcefulness and skill. Accompanied by his faithful ${familiar}, a creature of outstanding perception and insight, he eagerly tackles new challenges and expands the limits of what is achievable.`,
        `In a realm where technology and innovation are highly valued, ${name}, a member of the esteemed ${tribe} tribe of elves, is a skilled and accomplished inventor. His subterranean laboratories, equipped with advanced apparatus and devices, stand as evidence of his ingenuity and expertise. His trusty ${familiar}, a creature of considerable intellect and insight, offers a valuable source of support and companionship in his quest for knowledge and innovation.`,
        `Originating from the inventive ${tribe} tribe of elves, ${name} is a proficient and accomplished inventor with an extensive understanding of science and technology. His workshops, teeming with advanced machinery and gadgets, are a testament to his creative prowess. His devoted ${familiar}, a creature of acute insight and perception, serves as a valuable source of support and companionship, ever prepared to aid him in his pursuit of new discoveries.`,
        `Emanating from the inquisitive ${tribe} tribe of elves, ${name} is an accomplished and forward-thinking inventor with a profound grasp of science and technology. His workshops, laden with experimental devices and prototypes, exhibit his inventiveness and determination. His reliable ${familiar}, a creature of impressive intelligence and resourcefulness, is consistently by his side, eager to help him bring his most ambitious ideas to fruition.`,
        `Amid the progressive and innovative ${tribe} tribe of elves, ${name} is a talented and inventive inventor with a passion for science and technology. His workshops, overflowing with advanced machinery and sophisticated gadgets, serve as a testament to his expertise and imagination. His faithful ${familiar}, a creature of great intellect and curiosity, is ever-present to provide support and guidance in his relentless quest for knowledge and advancement.`,
        `A proud member of the inventive ${tribe} tribe of elves, ${name} is a skilled and accomplished inventor with a comprehensive understanding of science and technology. His workshops, filled with pioneering gadgets and cutting-edge machinery, exemplify his ingenuity and determination. Accompanied by his loyal ${familiar}, a creature of exceptional insight and intuition, he is always prepared to challenge boundaries and embark on new adventures.`,
        `Emerging from the visionary ${tribe} tribe of elves, ${name} is a brilliant and innovative inventor with a deep understanding of science and technology. His workshops, overflowing with experimental prototypes and imaginative designs, showcase his creativity and skill. His trusted ${familiar}, a creature of impressive intelligence and wit, is always available to offer support and companionship in his quest to bring his revolutionary ideas to life.`,
      ],
    },
    {
      tribe: "healing",
      texts: [
        `Amidst the serene forests of the renowned ${tribe} tribe of elves, ${name} is a gifted and knowledgeable healer who harnesses the power of crystals and energy to mend both body and spirit. His elegant robes, crafted from the finest linen and silk, ripple softly in the breeze as he moves with the poise of a gentle river. His dependable ${familiar}, a creature possessing remarkable healing abilities, serves as a valuable source of support and assistance.`,
        `Originating from the proud ${tribe} tribe of elves, ${name} is a proficient and seasoned healer, boasting an impressive array of skills. His flowing robes, woven from the softest linen and silk, display symbols of healing and rejuvenation. His devoted ${familiar}, a creature of immense compassion and empathy, remains by his side, always prepared to provide support.`,
        `Emerging from the respected ${tribe} tribe of elves, ${name} is a talented and knowledgeable healer with a deep comprehension of crystals and energy. His flowing robes, tailored from the finest silk and linen, exhibit gentle grace as he tends to the ailing and wounded. His reliable ${familiar}, a creature of great wisdom and insight, offers valuable companionship and support.`,
        `As a member of the esteemed ${tribe} tribe of elves, ${name} is an adept and versatile healer with a remarkable range of abilities. His flowing robes, fashioned from the softest silk and linen, bear symbols of healing and restoration. His loyal ${familiar}, a creature with extraordinary healing powers, serves as an invaluable source of support and assistance.`,
        `In a world where healing prowess is highly prized, ${name} of the proud ${tribe} tribe of elves shines as a beacon of hope and restoration. His flowing robes, crafted from the finest silk and linen, move with the grace of a gentle stream. His dedicated ${familiar}, a creature of immense compassion and empathy, remains by his side, constantly ready to offer support and companionship.`,
        `Hailing from the mystical and revered ${tribe} tribe of elves, ${name} is a competent and experienced healer, possessing the ability to soothe and mend both body and mind. His elegant robes, made from the finest silk and adorned with symbols of healing, demonstrate his deep understanding of crystals and energy. Accompanied by his trustworthy ${familiar}, a creature of exceptional healing power and intuition, he tenderly cares for the sick and injured with a gentle touch and a kind heart.`,
        `From the tranquil and captivating forests of the proud ${tribe} tribe of elves emerges ${name}, a proficient and knowledgeable healer with an impressive repertoire of skills. His flowing robes, sewn from the softest silk and linen, move gracefully as he tends to the wounded and ill. His steadfast ${familiar}, a creature of great compassion and empathy, remains by his side, offering support and companionship.`,
        `As a member of the respected ${tribe} tribe of elves, ${name} is a proficient and adaptable healer, deeply understanding the power of crystals and energy to restore both body and soul. His flowing robes, created from the finest silk and linen, display symbols of healing and restoration. His devoted ${familiar}, a creature of great wisdom and insight, acts as a constant source of support and assistance.`,
        `Born of the proud and mystical ${tribe} tribe of elves, ${name} is a master of healing, possessing the power to soothe and mend both body and spirit. His flowing robes, sewn from the softest silk and linen, are embroidered with symbols of healing and renewal, showcasing his deep understanding of crystals and energy. His faithful ${familiar}, a creature of exceptional healing power and intuition, stands by his side, always prepared to offer strength and support.`,
        `In a world where the power of healing is greatly valued, ${name}, a skilled and experienced healer from the esteemed ${tribe} tribe of elves, stands out with his impressive range of abilities. His flowing robes, made of the finest silk and linen, move with a gentle grace as he tends to the sick and injured. Accompanied by his loyal ${familiar}, a creature of great healing power and empathy, he is a source of hope and restoration for his people.`,
      ],
    },
    {
      tribe: "guardian",
      texts: [
        `Hailing from the proud and formidable ${tribe} tribe of elves, ${name} is a skilled and accomplished warrior, dedicated to defending his people with unwavering determination. His trusty ${familiar}, a creature of immense power and strength, proves to be an invaluable ally in battle. With his keen intellect and finely honed senses, ${name} consistently stays one step ahead of his adversaries, delivering swift and lethal blows.`,
        `As a member of the esteemed ${tribe} tribe of elves, ${name} is a powerful and skilled warrior with an unshakeable devotion to protecting his people. His faithful ${familiar}, a creature of impressive size and might, offers steadfast support and companionship. Boasting an array of formidable abilities and extensive combat experience, ${name} strikes fear into the hearts of his enemies as he relentlessly dominates the battlefield.`,
        `Among the vast forests of the revered ${tribe} tribe of elves, ${name} is a versatile and adept warrior with an impressive repertoire of combat skills. His loyal ${familiar}, a creature of immense power and ferocity, remains ever ready to defend their tribe from any threat. Displaying unwavering courage and determination, ${name} is a force to be reckoned with on the battlefield, swiftly and ruthlessly dispatching his enemies.`,
        `Born into the respected ${tribe} tribe of elves, ${name} is a fierce and formidable warrior, committed to safeguarding his people with unyielding resolve. His loyal ${familiar}, a creature of immense size and strength, is constantly prepared to assist in battle. Possessing remarkable skills and a wealth of combat experience, ${name} proves to be an unstoppable force in any battle, swiftly vanquishing his foes with his extraordinary reflexes and unrelenting power.`,
        `In a realm fraught with danger and strife, ${name}, a skilled and accomplished warrior from the proud ${tribe} tribe of elves, emerges as a force to be reckoned with. His loyal ${familiar}, a creature of immense power and might, offers unwavering support and partnership in the heat of battle, striking terror into the hearts of adversaries. With his sharp intellect and swift reflexes, ${name} faces any challenge head-on, overcoming his enemies with unparalleled skill and tenacity.`,
        `Originating from the revered and distinguished ${tribe} tribe of elves, ${name} is a skilled and accomplished warrior, wholly dedicated to the defense of his people. Accompanied by his loyal ${familiar}, a creature of extraordinary strength and agility, ${name} is a formidable presence on the battlefield, striking terror into the hearts of his enemies. Armed with an impressive array of abilities and an unwavering resolve, he battles his foes with unrivaled precision and force.`,
        `As a descendant of the ancient and powerful ${tribe} tribe of elves, ${name} is a true master of warfare, steadfastly committed to the protection of his people. His devoted ${familiar}, a creature of immense power and resilience, provides constant companionship and support. With his astute mind and lethal skills, ${name} is a force to be reckoned with on the battlefield, outmaneuvering his enemies with unmatched speed and agility.`,
        `In the magical and mystical realm of the ${tribe} tribe of elves, ${name} stands tall as a mighty warrior, each strike a testament to his unshakable dedication to defending his people. His faithful ${familiar}, a creature of great size and strength, fights alongside him in battle, adding its ferocity and might to the fray. With unwavering courage and swift reflexes, ${name} proves to be a formidable adversary in any conflict, skillfully and precisely eliminating his foes.`,
        `As a proud member of the respected ${tribe} tribe of elves, ${name} is a fierce and formidable warrior, constantly prepared to defend his people from harm. His devoted ${familiar}, a creature of remarkable strength and agility, offers unwavering support and partnership in battle. With a wealth of skills and an indomitable determination, ${name} dominates the battlefield, striking down his enemies with unparalleled speed and accuracy.`,
        `Emerging from the expansive forests of the proud ${tribe} tribe of elves, ${name} is a skilled and accomplished warrior, driven by an unrelenting commitment to safeguarding his people. His loyal ${familiar}, a creature of immense power and might, stands ready to contribute its strength and ferocity to the fight. With a sharp intellect and deadly expertise, ${name} is an intimidating presence on the battlefield, dispatching his enemies with unmatched speed and force.`,
      ],
    },
    {
      tribe: "dream",
      texts: [
        `Emerging from the ethereal and mystical Dream tribe, ${name} is a talented and revered dream mage, gifted with the ability to foresee the future through his dreams. His flowing robes, embellished with arcane symbols and radiant gemstones, signify his profound connection to the realm of spirits. Accompanied by his loyal ${familiar}, a magnificent creature of immense wisdom and foresight, he stands ready to guide and defend his fellow elves, granting them a vision of the future and the knowledge to chart their course.`,
        `Hailing from the enigmatic Dream tribe of elves, ${name} boasts a remarkable ability to interpret the future through his dreams. His flowing robes, intricately embroidered with mystical patterns and symbols, identify him as a formidable dream mage with the power to pierce the veil of time. His devoted ${familiar}, an elegant and regal creature of immense magic and wonder, offers unwavering support and companionship, lending its intuition and insight to his prophetic visions.`,
        `Amid the captivating and magical Dream tribe, ${name} is a skilled and potent dream mage with the ability to glimpse the future through his dreams. His flowing robes, adorned with glimmering jewels and dreamcatchers, establish him as an expert in dream magic, possessing the power to unravel the enigmas of the future. With his steadfast ${familiar}, a creature of exceptional intuition and perception, he is always prepared to offer guidance and protection, weaving the strands of fate to influence the destiny of his people.`,
        `As part of the esteemed Dream tribe, ${name} demonstrates a wide range of talents as a dream mage and spiritual advisor, providing his people with insights into the future and the wisdom to navigate their journey. His flowing robes, embellished with mystical symbols and dreamcatchers, reflect his deep bond with the spirit realm and the ability to channel its magic. With his dedicated ${familiar}, a magnificent creature of profound wisdom and foresight, he is always prepared to guide and safeguard his fellow elves, utilizing his visions of the future to mold their destiny.`,
        `From the peaceful and enchanting Dream tribe emerges ${name}, an adept and knowledgeable dream mage with the power to foresee the future through his dreams. His flowing robes, embroidered with magical symbols and adorned with dreamcatchers, distinguish him as a master of dream magic, capable of peering into the mists of time. With his loyal ${familiar}, a regal and wise creature of boundless magic and wonder, he is always prepared to offer guidance and support to his fellow elves, utilizing his visions of the future to light their way.`,
        `Originating from the mystical and otherworldly Dream tribe, ${name} is a skilled and respected dream mage with the ability to interpret the future through his visions. His flowing robes, adorned with magical symbols and shimmering crystals, identify him as a master of the dream realm, capable of guiding his people through the labyrinth of fate. With his loyal ${familiar}, a regal and insightful creature of immense perception, he stands as a beacon of hope and wisdom, ready to offer his guidance to those who seek it.`,
        `Born from the tranquil and captivating Dream tribe, ${name} possesses an extraordinary talent for interpreting the future through his dreams. His flowing robes, decorated with mystical symbols and delicate dreamcatchers, indicate him as a powerful dream mage, able to see beyond the veil of time. With his devoted ${familiar}, a magical and intuitive creature of great wonder and insight, he serves as a protector and guide for his people, using his visions of the future to shape their destiny.`,
        `In the realm of the Dream tribe, where dreams and magic are interwoven, ${name} is a potent and revered dream mage with the ability to peer into the mists of time. His flowing robes, adorned with sparkling gems and dreamcatchers, mark him as a master of the dream world, possessing the power to navigate the winding paths of fate. With his loyal ${familiar}, a majestic and wise creature of great perception and insight, he stands as a protector and guide for his people, using his visions of the future to influence their destiny.`,
        `Deep within the magical Dream tribe, ${name} stands as a powerful and knowledgeable dream mage, each vision offering a glimpse into the unfolding of destiny. His flowing robes, embellished with mystical symbols and radiant jewels, identify him as a master of the dream world, possessing the power to shape the course of fate. With his loyal ${familiar}, a magnificent and wise creature of extraordinary intuition, he stands as the guardian of his people's hopes and dreams, employing his visions of the future to illuminate their path.`,
        `Emerging from the serene and mystical Dream tribe, ${name} is a powerful and respected dream mage with the ability to glimpse the future through his visions. His flowing robes, intricately embroidered with magical symbols and adorned with glittering dreamcatchers, establish him as a master of the dream realm, capable of navigating the twists and turns of fate. With his loyal ${familiar}, a regal and wise creature of boundless magic, he stands as a protector and guide for his people, using his visions of the future to light their path and shape their destiny.`,
      ],
    },
    {
      tribe: "tree speaking",
      texts: [
        `Hailing from the esteemed ${tribe} tribe of elves, ${name} is a masterful tree speaker whose every word whispers in harmony with the ancient forest. His heightened elven senses make him an extraordinary guardian, attuned to even the slightest rustle of leaves. With his loyal ${familiar}, a mystical creature of vast wisdom and insight, he remains in perfect sync with the spirit of the forest, prepared to defend and protect his home at a moment's notice.`,
        `Emerging from the respected ${tribe} tribe of elves, ${name} is a skilled tree speaker with an innate connection to the natural world. His keen elven eyes detect the smallest disturbance in the forest, and his words have the power to pacify even the most troubled spirits. With his loyal ${familiar}, a mystical creature gifted with intuition and perception, he walks in harmony with the ancient trees, guiding and safeguarding them from potential harm.`,
        `In a world where the forest is held sacred and revered, ${name}, a proficient and adaptable tree speaker from the esteemed ${tribe} tribe of elves, thrives. His talent for communicating with the trees and creatures of the forest makes him a valued ally, his every word a soothing balm to calm the most restless spirits. Accompanied by his loyal ${familiar}, a mystical creature of immense wisdom and insight, he walks in harmony with the ancient forest, ever vigilant and ready to protect it from any threat.`,
        `Renowned across the land for his ability to commune with the trees and creatures of the forest, ${name} is a formidable elf from the distinguished ${tribe} tribe of elves. His every word echoes the ancient wisdom of the forest, and his heightened senses and innate understanding of nature make him an invaluable asset to his tribe. With his loyal ${familiar}, a mystical creature of profound perception and insight, he stands in unison with the ancient trees, always prepared to defend and protect them from harm.`,
        `Nestled within the vast forests of the proud ${tribe} tribe of elves, ${name} is a skilled and accomplished tree speaker with an array of impressive abilities. His every word serves as a bridge between the natural world and the elven realm, and his deep connection to the forest makes him an indispensable asset to his tribe. With his loyal ${familiar}, a mystical creature of extraordinary insight and intuition, he walks in harmony with the ancient trees, constantly watchful and ready to defend the forest from any who would harm it.`,
        `Originating from the enigmatic ${tribe} tribe of elves, ${name} is a skilled and revered tree speaker whose every utterance weaves harmoniously into the fabric of the forest. With his acute elven senses and his loyal ${familiar}, a mystical creature of immense wisdom and insight, he serves as a steadfast guardian of the ancient woods, ever watchful against any who would threaten them.`,
        `Growing up in the wilderness of the ${tribe} tribe of elves, ${name} has refined his skills as a tree speaker to perfection, his every word an orchestration of the forest's ancient rhythms. With his keen senses and his loyal ${familiar}, a mystical creature of exceptional perception and insight, he moves gracefully and purposefully through the verdant canopy, safeguarding the forest with a fierce and protective love.`,
        `Deep within the sacred forests of the ${tribe} tribe, ${name} walks as a true descendant of the ancient trees, each step a tender caress upon the forest floor. With his elven senses sharpened to perfection and his loyal ${familiar}, a mystical creature of vast wisdom and insight, he remains perpetually in tune with the spirit of the forest, listening to its whispers and guarding its secrets with a fierce and vigilant eye.`,
        `Belonging to the noble ${tribe} tribe of elves, ${name} is a master of the ancient art of tree speaking, his every word serving as a mystical conduit between the forest and the elven realm. With his sharp senses and his loyal ${familiar}, a mystical creature of exceptional intuition and insight, he walks as a guardian of the forest, an unwavering defender of its untamed beauty and its age-old wisdom.`,
        `A proud and devoted member of the ${tribe} tribe of elves, ${name} has dedicated his life to the art of tree speaking, his every utterance a haunting melody that reverberates through the ancient woods. With his keen senses and his loyal ${familiar}, a mystical creature of remarkable perception and insight, he stands as a silent sentinel of the forest, perpetually watchful and ready to defend the woods against all who would do them harm.`,
      ],
    },
    {
      tribe: "elemental",
      texts: [
        `Hailing from the esteemed ${tribe} tribe of elves, ${name} demonstrates an innate connection with the elements, showcasing a deep understanding of the natural world. His exceptional mastery of elemental magic, paired with his reliable ${familiar}, a sagacious and formidable fairy, establishes him as a formidable presence in any situation.`,
        `A powerful and adaptable wizard, ${name} belongs to the respected ${tribe} tribe of elves and possesses an intimate knowledge of the elements. This expertise, along with his loyal ${familiar}, a mighty and cunning elemental creature, makes him a true force of nature and a stalwart defender of his people.`,
        `In a realm where elements wield immense power, ${name}, a distinguished figure among the proud ${tribe} tribe of elves, stands out with his unparalleled understanding of the natural world and his ability to control the elements. Accompanied by his loyal ${familiar}, a creature of great power and wisdom, he remains prepared to utilize his mastery of elemental magic to preserve balance in the world.`,
        `As a member of the revered ${tribe} tribe of elves, ${name} has dedicated his life to understanding the elements and employing his power to maintain the equilibrium of the natural world. His trusted ${familiar}, a potent and wise elemental creature, offers invaluable support and guidance, enabling him to fulfill his sacred duty to protect his tribe.`,
        `${name}, a descendant of the respected ${tribe} tribe of elves, possesses a profound understanding of the elements and a deep respect for the natural world. His expertise in elemental magic, combined with his loyal ${familiar}, a creature of great magic and wonder, makes him a formidable protector of his tribe and a valuable ally in any situation.`,
        `From the ancient and mighty ${tribe} tribe of elves emerges ${name}, a master of elemental magic, whose every spell is a harmonious interplay with the forces of nature. With his reliable ${familiar}, a wise and cunning elemental creature, by his side, he serves as a guardian of the natural world, using his power to maintain balance and harmony among the elements.`,
        `With a deep reverence for the elements and unwavering commitment to his tribe, ${name} is a formidable wizard from the proud ${tribe} tribe of elves. His expertise in elemental magic is matched only by his loyalty to his people, and with his faithful ${familiar}, a powerful and enigmatic elemental creature, he stands as a tenacious defender of his tribe's sacred traditions.`,
        `In the realm of the elves, where the elements hold immense power and significance, ${name} is a true master of elemental magic. As a member of the revered ${tribe} tribe of elves, he uses his profound understanding of the natural world to protect his people and maintain balance. Accompanied by his loyal ${familiar}, a creature of great magic and wonder, he embodies a force of nature, ever vigilant and prepared to harness the power of the elements.`,
        `With his deep comprehension of the elements and unwavering commitment to his tribe, ${name}, a potent and respected wizard from the esteemed ${tribe} tribe of elves, is a true expert of elemental magic. Alongside his reliable ${familiar}, a wise and powerful elemental creature, he serves as a protector of the natural world, using his power to safeguard his tribe and maintain the delicate balance of the elements.`,
        `Originating from the ancient and storied ${tribe} tribe of elves, ${name} is a true master of elemental magic, with each spell reflecting his deep connection to the natural world. Accompanied by his loyal ${familiar}, a powerful and enigmatic elemental creature, he stands as a defender of the elements, always ready tounleash the power of earth, wind, fire, and water to protect his tribe and the world they inhabit.`,
      ],
    },
  ];

  const swordText = [
    ` A true warrior, he wields a sword with lethal finesse. Each of his movements is deliberate, every strike aimed with deadly precision. None can withstand the relentless onslaught of his blade.`,
    ` With a sword in hand, he becomes an unstoppable force on the battlefield. His swift and accurate strikes carve a path of destruction through the ranks of his adversaries.`,
    ` He brandishes his sword with the elegance of a dancer and the ferocity of a wild beast. His blade slices through the air, each strike resonating like a clap of thunder.`,
    ` The glint of his sword instills fear in the hearts of those who dare to oppose him. He maneuvers with seamless precision, his blade tracing a lethal path among his foes.`,
    ` His swordsmanship is legendary, surpassing even the greatest knights in the realm. He is a true master of the art, his every movement a testament to his unrivaled skill and prowess.`,
    ` The harmony between his sword and his body is a sight to behold. His graceful yet powerful movements are reminiscent of a skilled calligrapher, painting the battlefield with the strokes of his blade.`,
    ` In his hands, the sword transforms into an extension of his very being. Each swing is guided by an unwavering focus, an unwritten symphony of steel and determination echoing throughout the battlefield.`,
  ];

  const daggerText = [
    ` A master of stealth and deception, he glides through the shadows like a specter. His dagger serves as a lethal extension of his arm, each strike delivering a swift and silent deathblow to his adversaries.`,
    ` Embracing the night as his ally, he navigates it like a phantom. His movements are so rapid and precise that his enemies remain oblivious to the attack until it is too late. He wields his dagger with deadly accuracy and finesse.`,
    ` His nimble form becomes a blur in the darkness, each movement meticulously planned to instill fear in the hearts of his opponents. His dagger is ever at the ready, its razor-sharp blade reflecting the moon's glow.`,
    ` A true predator, he stalks his quarry with lethal intent. Preferring the dagger as his weapon of choice, its silent strike leaves his enemies trembling in terror. His unmatched agility and grace render him an elusive target.`,
    ` In the cloak of night, he becomes a formidable terror. Each move is carefully calculated, every strike of his dagger inflicting a fatal blow. His enemies dread his agility and expertise, as few can rival his combat proficiency.`,
    ` Like a silent assassin, he moves with purpose and swiftness, merging with the darkness. His dagger, an instrument of precision, cuts through the air as easily as it slices through the flesh of his enemies.`,
    ` His presence is felt more than it is seen, as he glides through the shadows with an air of menace. The dagger he wields is a symbol of his lethal efficiency, each thrust punctuating the grim finality of his intent.`,
  ];

  const wandText = [
    ` He brandishes his wand with expertise, casting spells with fluid grace and exactitude. His magic is a mesmerizing blend of beauty and terror, an awe-inspiring sight.`,
    ` Armed with his wand, he emerges as a formidable force on the battlefield. His spells are unleashed in rapid succession, each one delivering a potent blow that leaves his adversaries reeling.`,
    ` His wand is a masterpiece, meticulously crafted with care and precision. With this tool, he channels the raw power of magic, unleashing a surge of energy that can devastate armies.`,
    ` A master of magic, his wand serves as an extension of his will. His repertoire of spells is as diverse as it is lethal, with the ability to conjure towering walls of fire or dismantle entire mountains.`,
    ` Clutching his wand, he embodies the quintessential wizard, capable of invoking the very forces of nature. His enemies cower in fear of his magic, for they recognize that they are no match for the power he can unleash.`,
    ` His wand, a conduit of unimaginable power, amplifies his innate abilities, enabling him to perform feats of magic that defy comprehension. In his grasp, the wand becomes a key that unlocks the secrets of the arcane.`,
    ` With his wand, he weaves intricate tapestries of magic, each spell a testament to his mastery and skill. His enemies tremble in anticipation, fully aware that they stand on the precipice of facing a true sorcerer's wrath.`,
  ];

  const magicExpertText = [
    ` His magic is awe-inspiring, with the potential to shake the very foundations of the earth. Boasting a score of ${magic}, he ranks among the most powerful sorcerers in the realm, and his mastery of the arcane is unparalleled.`,
    ` The very atmosphere around him pulsates with magical energy, an otherworldly power he wields effortlessly. With a score of ${magic}, he stands as a formidable force, capable of unleashing catastrophic spells with a mere thought.`,
    ` His magic glows as brilliantly as the sun, yet also encompasses the depths of the void. Holding a score of ${magic}, he is a true maestro of the arcane, summoning the elements and bending them to his will with remarkable grace.`,
    ` He is a living wellspring of magic, his entire being infused with supernatural power. With a score of ${magic}, he is among the most adept sorcerers in the realm, manipulating reality itself to suit his desires.`,
    ` The potency of his magic is unrivaled, a force capable of tearing mountains apart and decimating entire armies. With a score of ${magic}, he stands as one of the most formidable sorcerers across the land, a true virtuoso of the arcane arts.`,
    ` His command over the mystic arts is a sight to behold, as he weaves complex spells with an air of elegance. Possessing a score of ${magic}, he is a renowned sorcerer, whose understanding of the arcane secrets leaves others in awe.`,
    ` His magical prowess resonates with a power that echoes throughout the realm. With a score of ${magic}, he has earned his place among the most distinguished sorcerers, deftly navigating the intricate nuances of the arcane world.`,
  ];

  const magicSpecialistText = [
    ` Although he may not yet be a seasoned wizard, his magical aptitude is certainly noteworthy. With a score of ${magic}, he demonstrates precision and control in his spellcasting, with his power amplifying with each incantation.`,
    ` His magical prowess bears witness to his unwavering dedication and arduous efforts, showcasing the true potential of the arcane. Possessing a score of ${magic}, he wields formidable spells with increasing skill, leaving his adversaries on guard.`,
    ` While he has not yet reached mastery in the arcane arts, his magical abilities remain impressive. Boasting a score of ${magic}, he intricately weaves spells with enhancing precision and control, each incantation surpassing the last.`,
    ` His magical abilities continue to develop, already emerging as a force to be reckoned with. With a score of ${magic}, he wields spells with growing finesse and expertise, every move reflecting his burgeoning proficiency.`,
    ` He may not be the most seasoned wizard in the realm, but his magical capabilities are nonetheless striking. Carrying a score of ${magic}, he crafts potent spells with increasing accuracy and control, each incantation a testament to his potential.`,
    ` As his knowledge of the arcane arts expands, so does his prowess in wielding magic. With a score of ${magic}, he hones his skills, casting spells with increasing efficacy and power, leaving a lasting impression on those who witness his abilities.`,
    ` Even though he is still perfecting his craft, his magical skills exhibit immense promise. With a score of ${magic}, he channels spells with growing dexterity and potency, each incantation offering a glimpse into his ever-expanding potential.`,
  ];

  const magicNoviceText = [
    ` Though his magic score may be humble, he is a warrior at heart. With a score of only ${magic}, he is still able to confront the most fearsome of adversaries, relying on his other abilities to offset any deficiency in magical prowess.`,
    ` Despite not possessing exceptional magical power, he compensates with his cunning and resourcefulness. With a score of only ${magic}, he vanquishes his foes through unyielding determination and ingenious strategies.`,
    ` While he may not be the most potent sorcerer, his magical capabilities remain a valuable asset on the battlefield. With a score of only ${magic}, he conjures spells with remarkable precision and finesse, as his other talents bridge the gap in magical power.`,
    ` Although he may not excel in the magical arts, his other skills more than compensate. With a score of only ${magic}, he is a formidable warrior, surmounting even the most powerful of adversaries through sheer resolve and expertise.`,
    ` His magic score may be modest compared to others, but his unique talents more than make up for it. With a score of only ${magic}, he overcomes the most daunting of enemies by skillfully blending strategy, technique, and raw power.`,
    ` He may not be a natural-born sorcerer, but his unwavering spirit and adaptability prove invaluable. With a score of only ${magic}, he faces his opponents with courage, relying on his tenacity and innate abilities to claim victory.`,
    ` While his magic score may not be extraordinary, he has a knack for maximizing his potential. With a score of only ${magic}, he is able to confront even the most formidable foes, drawing upon a wealth of resourcefulness and tactical acumen.`,
  ];

  const strengthExpertText = [
    ` Possessing a strength score exceeding ${
      strength - 1
    }, he is an undeniable force to be reckoned with.`,
    ` His remarkable strength, measuring over ${
      strength - 1
    }, has become the stuff of legends.`,
    ` Few can rival his power, boasting a strength score that surpasses ${
      strength - 1
    }.`,
    ` With a strength score exceeding ${
      strength - 1
    }, he stands as one of the mightiest beings across the land, instilling fear in his enemies and earning the respect of his allies.`,
    ` His formidable strength, registering over ${
      strength - 1
    }, makes him an intimidating opponent in any confrontation.`,
    ` His extraordinary strength, with a score exceeding ${
      strength - 1
    }, commands awe and respect from all who witness his might.`,
    ` With a staggering strength score of over ${
      strength - 1
    }, his sheer physical prowess sets him apart as a fearsome combatant.`,
  ];

  const strengthSpecialistText = [
    ` With a strength score of ${strength}, he presents himself as a formidable adversary in battle.`,
    ` His strength, although not the highest, remains a significant force to consider, measuring over ${
      strength - 1
    }.`,
    ` He boasts a strength score of ${strength}, which distinguishes him as a formidable warrior.`,
    ` His unwavering determination and strength, scoring above ${
      strength - 1
    }, empower him to confront even the most daunting of opponents.`,
    ` While his strength may not be extraordinary, it still exceeds that of many, registering over ${
      strength - 1
    }.`,
    ` His impressive strength, with a score of ${strength}, demonstrates his capability to face challenging opponents head-on.`,
    ` With a strength score above ${
      strength - 1
    }, his physical prowess is a testament to his dedication and resilience.`,
  ];

  const strengthNoviceText = [
    ` While his strength may not be his most remarkable quality, he possesses other abilities to rely on.`,
    ` His strength score might not be his highest, but he compensates with resourcefulness and expertise.`,
    ` Although strength may not be his most outstanding attribute, he utilizes other talents to achieve victory over his adversaries.`,
    ` He draws upon his intelligence and skill to outmaneuver his opponents, as his strength score is not extraordinary.`,
    ` With his strength score not being his highest, he leans on other capabilities to see him through confrontations.`,
    ` His strength may not be his primary asset, but his adaptability and keen mind enable him to face challenges with confidence.`,
    ` He may not possess exceptional strength, but his tenacity and strategic acumen more than compensate, allowing him to excel in battles.`,
  ];

  const luckExpertText = [
    ` Fortune favors him, with a luck score exceeding ${
      luck - 1
    } that appears to bend the very fabric of reality in his favor.`,
    ` His exceptional luck, registering over ${
      luck - 1
    }, has delivered him from certain doom on countless occasions.`,
    ` Few can rival his extraordinary luck, boasting a score that surpasses ${
      luck - 1
    }.`,
    ` He stands as one of the luckiest beings across the land, with a near-supernatural luck score of ${luck}.`,
    ` His remarkable luck, scoring above ${
      luck - 1
    }, has secured him success even in the most improbable situations.`,
    ` With a luck score of ${luck}, he seems to have the fates on his side, guiding him through the most treacherous of circumstances.`,
    ` His luck, measuring an astounding ${luck}, has time and again turned the tide in his favor, defying all odds.`,
  ];

  const luckSpecialistText = [
    ` With a luck score of ${luck}, he has experienced his fair share of narrow escapes and fortuitous outcomes.`,
    ` His luck, although not the highest, has delivered him from peril on multiple occasions, measuring over ${
      luck - 1
    }.`,
    ` He boasts a luck score exceeding ${
      luck - 1
    }, marking him as a fortunate elf who has narrowly averted disaster in the past.`,
    ` His luck, scoring above ${
      luck - 1
    }, has allowed him to prevail in situations where others might have faltered.`,
    ` While his luck may not be extraordinary, it remains higher than most, registering over ${
      luck - 1
    }.`,
    ` His luck score of ${luck} has often granted him a timely advantage, helping him navigate through challenging situations.`,
    ` With a luck score above ${
      luck - 1
    }, he has a knack for finding favorable outcomes even when the odds seem stacked against him.`,
  ];

  const luckNoviceText = [
    ` While luck may not be his strongest suit, he has other attributes that serve him well in various situations.`,
    ` His luck score may not be his most impressive, but he compensates with intelligence and skill.`,
    ` Although luck isn't his most remarkable quality, he possesses other strengths that make him a skillful and formidable individual.`,
    ` He relies on his resourcefulness and expertise to surmount challenges, as his luck score isn't particularly exceptional.`,
    ` With his luck score not being his most notable, he leans on other talents to help him navigate difficult circumstances.`,
    ` His luck may not be outstanding, but his perseverance and determination often help him achieve his goals.`,
    ` Although his luck score isn't his highest, he relies on his adaptability and resilience to confront adversity.`,
  ];

  const speedExpertText = [
    ` He races across the terrain like a bolt of lightning, his astonishing speed a marvel to witness.`,
    ` With a speed score exceeding ${
      speed - 1
    }, he ranks among the swiftest elves in the realm, unparalleled in his agility and elegance.`,
    ` His remarkable speed, registering at over ${
      speed - 1
    }, renders him a barely visible blur on the battlefield as he weaves in and out of combat effortlessly.`,
    ` Few can rival his exceptional speed, boasting a score that surpasses ${
      speed - 1
    }.`,
    ` He is among the fleetest beings in the land, his speed score outpacing all competitors.`,
    ` His agility and grace are unrivaled, allowing him to cover vast distances in the blink of an eye.`,
    ` The swiftness with which he moves is awe-inspiring, making him a formidable opponent in any contest of speed.`,
  ];

  const speedSpecialistText = [
    ` He moves with a grace and speed that few can match, his swiftness a testament to his elven heritage.`,
    ` With a speed score of ${speed}, he is a nimble and agile warrior, adept at darting in and out of combat with ease.`,
    ` He boasts a speed score of ${speed}, marking him as a fleet-footed elf capable of keeping pace with the best.`,
    ` His agility, registering above ${
      speed - 1
    }, renders him a formidable opponent in battle.`,
    ` While not the fastest, his speed and grace still surpass many, clocking in at over ${
      speed - 1
    }.`,
    ` He deftly maneuvers through the battlefield, his speed allowing him to outmaneuver opponents and strike with precision.`,
    ` With agility and quickness, he easily navigates complex terrains and responds rapidly to changing situations.`,
  ];

  const speedNoviceText = [
    ` He moves more slowly than most elves, but still possesses a certain charm and grace that is uniquely his own.`,
    ` With a speed score of ${speed}, he may not be the fastest elf around, but he makes up for it with his other attributes.`,
    ` Although his speed may not be his most exceptional attribute, he has other strengths that make him a skilled and formidable elf.`,
    ` He relies on his cunning and skill to overcome obstacles, as his speed score is not exceptional.`,
    ` With his speed score not being his highest, he depends on other strengths to carry him through battles.`,
    ` While not the quickest, his ability to strategize and think ahead compensates for his lower speed score.`,
    ` His speed may not be extraordinary, but his perseverance and determination more than make up for it in challenging situations.`,
  ];

  const agilityExpertText = [
    ` He moves with the grace and precision of a dancer, his incredible agility a testament to his elven heritage.`,
    ` With an agility score of over ${
      agility - 1
    }, he is one of the most nimble and acrobatic elves in the realm, able to twist and turn with the fluidity of water.`,
    ` His incredible agility, clocking in at over ${
      agility - 1
    }, allows him to move with a grace and fluidity that seems almost supernatural.`,
    ` Few can match his uncanny agility, with a score that surpasses ${
      agility - 1
    }.`,
    ` He is one of the most agile beings in all the land, with an agility score of ${agility} that is the envy of all.`,
    ` With an agility score of ${agility}, his movements are swift and precise, effortlessly navigating through obstacles and challenges.`,
    ` His extraordinary agility, boasting a score of ${agility}, enables him to tackle even the most demanding physical feats with ease.`,
  ];

  const agilitySpecialistText = [
    ` He possesses a natural talent for quick movements and deft maneuvers, his agility allowing him to dodge and weave with ease.`,
    ` With an agility score of ${agility}, he is a quick and agile warrior, able to outmaneuver his opponents with ease.`,
    ` He possesses an agility score that tops ${agility}, making him a nimble and agile elf who can keep up with the best of them.`,
    ` His quickness and agility, scoring above ${
      agility - 1
    }, make him a formidable opponent in battle.`,
    ` His agility, while not exceptional, is still higher than most, clocking in at over ${
      agility - 1
    }.`,
    ` His graceful movements and dexterity, with an agility score of ${agility}, enable him to navigate complex challenges and tight situations.`,
    ` With an agility score of ${agility}, he is a proficient acrobat, able to perform impressive feats of balance and coordination.`,
  ];

  const agilityNoviceText = [
    ` He moves more slowly and deliberately than most elves, but his movements are still precise and well-controlled.`,
    ` With an agility score at ${agility}, he may not be the most agile elf around, but he makes up for it with his other attributes.`,
    ` Although his agility may not be his most exceptional attribute, he has other strengths that make him a skilled and formidable elf.`,
    ` He relies on his cunning and skill to overcome obstacles, as his agility score is not exceptional.`,
    ` With his agility score not being his highest, he depends on other strengths to carry him through battles.`,
    ` He may not be as nimble or agile as other elves, but his determination and resilience allow him to face challenges head-on.`,
    ` While his agility score of ${agility} is not his strongest attribute, he compensates with clever strategies and a strong sense of teamwork.`,
  ];

  const intelligenceExpertText = [
    ` ${name} also possesses a brilliant mind, his intelligence and knowledge a match for any sage or scholar.`,
    ` With an intelligence score of over ${
      intelligence - 1
    }, ${name} is one of the most clever and perceptive elves in the realm, able to unravel even the most intricate of puzzles with ease.`,
    ` ${name}'s incredible intelligence, clocking in at over ${
      intelligence - 1
    }, allows him to see solutions where others see only problems.`,
    ` Few can match ${name}'s uncanny intelligence, with a score that surpasses ${
      intelligence - 1
    }.`,
    ` ${name} is one of the most knowledgeable beings in all the land, with an intelligence score that rivals that of any scholar.`,
    ` ${name}'s vast intellect, scoring over ${
      intelligence - 1
    }, grants him the ability to think critically and solve complex problems with ease.`,
    ` Gifted with an intelligence score that surpasses ${
      intelligence - 1
    }, ${name} is renowned for his wit and resourcefulness, making him a valuable asset in any endeavor.`,
  ];

  const intelligenceSpecialistText = [
    ` ${name} has a sharp and incisive mind, capable of analyzing complex problems and devising clever solutions.`,
    ` With an intelligence score of ${intelligence}, ${name} is a quick-witted and resourceful warrior, able to outsmart opponents with ease.`,
    ` ${name} possesses an intelligence score above ${
      intelligence - 1
    }, making him a clever and perceptive elf who can analyze complex problems.`,
    ` ${name}'s intelligence, scoring above ${
      intelligence - 1
    }, makes him a formidable opponent in battle.`,
    ` ${name}'s intelligence, while not exceptional, is still higher than most, clocking in at over ${
      intelligence - 1
    }.`,
    ` ${name} showcases his mental acuity in the way he strategizes and overcomes challenges, with an intelligence score of ${intelligence}.`,
    ` With an intelligence score of ${intelligence}, ${name} demonstrates a deep understanding of various subjects, making him an invaluable ally in any situation.`,
  ];

  const intelligenceNoviceText = [
    ` Although ${name} may not be known for his intelligence among the elves, he possesses a certain wisdom and intuition that can be just as valuable.`,
    ` With an intelligence score at ${intelligence}, ${name} may not be the most cerebral elf around, but he makes up for it with his other attributes.`,
    ` Although his intelligence may not be his most exceptional attribute, ${name} has other strengths that make him a skilled and formidable elf.`,
    ` ${name} relies on his cunning and skill to overcome obstacles, as his intelligence score is not exceptional.`,
    ` With his intelligence score not being his highest, ${name} depends on other strengths to carry him through battles.`,
    ` ${name}'s intelligence may not be his strongest suit, but his natural instincts and resourcefulness more than compensate in challenging situations.`,
    ` Though ${name} may not be known for his intellectual prowess, his ability to adapt and learn from experiences adds to his overall effectiveness in the field.`,
  ];

  const textArrays = {
    descriptions: descriptions,
    intelligenceNoviceText: intelligenceNoviceText,
    intelligenceSpecialistText: intelligenceSpecialistText,
    intelligenceExpertText: intelligenceExpertText,
    agilityNoviceText: agilityNoviceText,
    agilitySpecialistText: agilitySpecialistText,
    agilityExpertText: agilityExpertText,
    speedNoviceText: speedNoviceText,
    speedSpecialistText: speedSpecialistText,
    speedExpertText: speedExpertText,
    luckNoviceText: luckNoviceText,
    luckSpecialistText: luckSpecialistText,
    luckExpertText: luckExpertText,
    strengthNoviceText: strengthNoviceText,
    strengthSpecialistText: strengthSpecialistText,
    strengthExpertText: strengthExpertText,
    magicExpertText: magicExpertText,
    magicSpecialistText: magicSpecialistText,
    magicNoviceText: magicNoviceText,
    swordText: swordText,
    daggerText: daggerText,
    wandText: wandText,
  };

  const selectedArray = textArrays[textArrayName];

  if (textArrayName === "descriptions") {
    const array = selectedArray.find((obj) => obj.tribe === tribe);
    console.log(tribe);

    return array.texts[Math.floor(Math.random() * array.texts.length)];
  }

  return selectedArray[Math.floor(Math.random() * selectedArray.length)];
};
