// Developer: Mohammed (@ tech-moh-logy)
// Project Type: E-Commerce Website (Movie Site) – in-progress
// Project Name: Cinema Curry 

const products = [
    {
        "id": 1,
        "name":" RRR",
        "price": 27,
        "image": "images/ecommerce.movie.pic1.jpg",
        "description": "RRR is an epic action-drama film directed by renowned Indian filmmaker S.S. Rajamouli. Set in the 1920s, the movie revolves around two fictional freedom fighters, Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. The title RRR stands for the names of these iconic revolutionaries. The film features a stellar cast including Ram Charan, Jr. NTR, Alia Bhatt, and Ajay Devgn in pivotal roles. Known for its grand scale, intense action sequences, and emotional depth, RRR promises to be a captivating cinematic experience celebrating the spirit of courage, sacrifice, and patriotism."
    },
    {
        "id": 2,
        "name":" MNIK",
        "price": 17,
        "image": "images/ecommerce.movie.pic2.jpg",
        "description": "My Name is Khan is a heartfelt drama directed by Karan Johar, starring Shah Rukh Khan and Kajol. Released in 2010, the film delves into the life of Rizwan Khan, a Muslim man with Asperger's syndrome, living in post-9/11 America. After a tragic incident, Rizwan embarks on a journey to meet the President and clear his name, confronting discrimination and prejudice along the way. The film explores themes of love, acceptance, and the human capacity to overcome adversity. My Name is Khan received praise for its performances and social relevance, making it a significant contribution to Indian cinema."
    },
    {
        "id": 3,
        "name":" Pathaan",
        "price": 29,
        "image": "images/ecommerce.movie.pic3.jpg",
        "description": "In 2019, India removed Article 370 from its Constitution, affecting a Pakistani army general named Qadir, who, motivated by vengeance, joins forces with Jim, leader of a terrorist group called Outfit X. Meanwhile, Pathaan, an Indian RAW agent, teams up with Nandini Grewal to form a unit called Joint Operations and Covert Research. They recruit retired agents and soldiers to thwart Outfit X's plans, particularly to stop an attack on the Indian President in Dubai. However, they discover a plot to kidnap two scientists instead. During a confrontation, Jim escapes with one scientist, Dr. Sahani. It's revealed that Jim, presumed dead, seeks revenge due to the government's failure to save his family from terrorists. Pathaan uncovers a clue, Raktbeej, linking to a deadly virus. Pursuing leads, he's betrayed by a former ISI agent and captured by Russian authorities. Jim aims to acquire the virus for his own agenda. Pathaan, with allies, tracks Jim's activities, eventually locating the virus in Siberia. They retrieve one sample but Jim escapes with the other. Indian authorities plan to develop a vaccine using the recovered sample."
    },
    {
        "id": 4,
        "name":" Sultan",
        "price": 22,
        "image": "images/ecommerce.movie.pic4.jpg",
        "description": "Sultan is a gripping cinematic masterpiece that immerses viewers in the exhilarating world of wrestling while delving deep into the human spirit's resilience and redemption. Directed by Ali Abbas Zafar, this Bollywood film showcases the journey of Sultan Ali Khan, portrayed by the enigmatic Salman Khan, whose path from a humble village wrestler to a national icon is laden with trials, tribulations, and triumphs. Set against the backdrop of love, loss, and the pursuit of glory, Sultan weaves a compelling narrative that resonates with audiences worldwide, making it a timeless tale of passion, perseverance, and the indomitable human spirit."
    },
    {
        "id": 5,
        "name":" Bajrangi",
        "price": 30,
        "image": "images/ecommerce.movie.pic5.jpg",
        "description": "​Bajrangi Bhaijaan is a heartwarming cinematic gem that captivates audiences with its poignant storytelling and unforgettable performances. Directed by Kabir Khan, this Bollywood masterpiece follows the extraordinary journey of Pavan, affectionately known as Bajrangi, portrayed by the charismatic Salman Khan. Fueled by innocence and compassion, Pavan embarks on a mission to reunite a mute Pakistani girl, Munni, with her family across the border, navigating through cultural barriers and geopolitical tensions. Through its powerful narrative, Bajrangi Bhaijaan transcends boundaries, celebrating the universal themes of love, humanity, and the unwavering belief in the inherent goodness of humanity, making it a timeless classic cherished by audiences of all ages."
    },
    {
        "id": 6,
        "name":" Dangal",
        "price": 40,
        "image": "images/ecommerce.movie.pic6.jpg",
        "description": "Dangal stands as a cinematic triumph that not only entertains but also inspires with its powerful storytelling and remarkable performances. Directed by Nitesh Tiwari, this Bollywood masterpiece follows the real-life story of wrestler Mahavir Singh Phogat, portrayed by the versatile Aamir Khan, and his relentless pursuit to train his daughters, Geeta and Babita, in the sport of wrestling. Set against the backdrop of societal norms and gender stereotypes, Dangal challenges conventions and celebrates the unyielding spirit of determination and empowerment. With its exhilarating sports sequences and deeply resonant emotional core, the film transcends cultural boundaries to deliver a universal message of perseverance, family, and the pursuit of dreams, earning it accolades both domestically and internationally."
    },
    {
        "id": 7,
        "name":" Tere Naam",
        "price": 20,
        "image": "images/ecommerce.movie.pic7.jpg",
        "description": "Tere Naam is a poignant romantic drama that delves into the complexities of love, redemption, and sacrifice. Directed by Satish Kaushik, this Bollywood film revolves around Radhe Mohan, portrayed by the talented Salman Khan, whose life takes a tumultuous turn when he falls deeply in love with the innocent and spirited Nirjara, played by Bhumika Chawla. However, their love story is marred by societal prejudices and personal demons, leading to a gripping tale of heartbreak and self-discovery. Through its powerful performances and evocative storytelling, Tere Naam explores themes of love, obsession, and the transformative power of redemption, leaving a lasting impact on audiences and earning its place as a timeless classic in Indian cinema."
    },
    {
        "id": 8,
        "name":" Jawan",
        "price": 25,
        "image": "images/ecommerce.movie.pic8.jpg",
        "description": "Azad is the jailer of a women's prison in Mumbai who hijacks a Mumbai Metro train with a group of six inmates: Lakshmi, Eeram, Ishkra, Kalki, Helena and Janhvi. He negotiates with NSG officer Narmada Rai to ask the Agriculture Minister to send ₹40,000 crore in exchange for the passengers' lives. Kalee Gaikwad, a global arms dealer, learns that his daughter Alia is one of the captives and agrees to fund the deal. Azad plans to donate that money toward the loan waiver of 700,000 impoverished farmers in the country. Azad and his gang transfer the funds into the farmers' bank accounts and escape. Through Alia, he reveals his name as Vikram Rathore to Kalee. Azad meets Narmada and her young daughter Suchi, and they get married. Azad and his gang next kidnap the Health Minister and demand better infrastructure at government hospitals in exchange for the Health Minister's life. The infrastructure is immediately upgraded and Azad and his gang escape again. After their wedding, Narmada discovers Azad's true identity, and Kalee's brother Manish captures and tortures the couple. Azad is saved by his doppelgänger, Vikram Rathore. Narmada confronts Azad's accomplices in the jail by disguising herself as an inmate. Here, she learns about Azad and Vikram's connection."
    },
    {
        "id": 9,
        "name":" HAHK",
        "price": 25,
        "image": "images/ecommerce.movie.pic9.jpg",
        "description": "Hum Aapke Hain Koun..! (transl. Who am I to you?) also known by the initialism HAHK,[7][8] is a 1994 Indian Hindi-language musical romantic drama film[9] written and directed by Sooraj Barjatya[7] and produced by Rajshri Productions. The film stars Madhuri Dixit and Salman Khan and celebrates Indian wedding traditions by means of a story of a married couple and the relationship between their families; a story about sacrificing one's love for one's family. Prem and Rajesh, orphaned brothers, live with their uncle Kailashnath. Rajesh manages the family business and is set to marry Pooja, daughter of Siddharth and Madhukala. Meanwhile, Prem and Nisha, Siddharth's other daughter, develop feelings for each other. Pooja and Rajesh discover their love and await a baby. When Pooja dies tragically, Nisha cares for their child. Siddharth and Kailashnath plan for Nisha to marry Rajesh, but Nisha misunderstands and thinks she'll marry Prem. Eventually, the truth is revealed, and Nisha and Prem marry with family approval."
    },
    {
        "id": 10,
        "name":" K.G.F. 2",
        "price": 25,
        "image": "images/ecommerce.movie.pic10.jpg",
        "description": "After Anand Ingalagi's stroke, his son Vijayendra takes over the story. Rocky becomes a powerful figure in the Kolar Gold Fields (K.G.F) by eliminating rivals and holding Reena hostage. But his arrogance causes problems, leading to a split among his allies. Adheera resurfaces and challenges Rocky's control, forcing him to strike deals and fortify his position. Internal conflicts arise when Shetty allies with Rocky's enemies. Despite this, Rocky maintains his hold over Bombay. When Ramika Sen becomes Prime Minister, she targets Rocky's illegal activities, prompting a desperate response from him. Rocky marries Reena, but tragedy strikes when Adheera kills her. Rocky sacrifices himself in a final showdown with Adheera to protect his legacy. The story hints at ongoing intrigue as evidence of Rocky's crimes emerges, and a draft for K.G.F: Chapter 3 suggests the saga isn't over yet."
    },
    {
        "id": 11,
        "name":" Karan Arjun",
        "price": 23,
        "image": "images/ecommerce.movie.pic11.jpg",
        "description": "In a Rajasthan village, Durga Singh raises her sons Karan and Arjun alone. The Thakur's son married Durga against his father's wishes and was killed by a relative, Durjan Singh, to prevent them from inheriting the estate. Learning Thakur planned to leave the estate to Karan and Arjun, Durjan murders him and the brothers. Durga prays for their return, and twenty years later, they are reincarnated as Vijay and Ajay, raised separately. Vijay falls for Sonia, while Ajay works for Sonia's father. Conflict arises when Durjan's son, Suraj, tries to kill Vijay. Ajay saves him but is jailed, while Vijay escapes. Sonia is to marry Suraj, but Vijay rescues her. He remembers his past, reunites with Durga, and finds Ajay is his brother. They defeat Durjan and his allies, marry their loves, and unite as a family."
    },
    {
        "id": 12,
        "name": " Bahubali 2",
        "price": 25,
        "image": "images/ecommerce.movie.pic12.jpg",
        "description": "In the film, Azad, a jailer at a women's prison in Mumbai, hijacks a Mumbai Metro train with six female inmates. He negotiates with an NSG officer, Narmada Rai, demanding a hefty sum of money to release the hostages. The money is intended to be used for the loan waiver of 700,000 impoverished farmers. Azad's plan involves transferring the funds into the farmers' bank accounts before escaping. Throughout the story, Azad's true identity is revealed as Vikram Rathore to Kalee Gaikwad, a global arms dealer, whose daughter Alia is one of the captives. Azad eventually marries Narmada and continues his vigilant acts, including kidnapping the Health Minister to demand better infrastructure at government hospitals. However, complications arise when Narmada discovers Azad's true identity and they are captured and tortured by Kalee's brother. Azad is saved by his doppelgänger, Vikram Rathore, and Narmada learns more about Azad's connection to Vikram while confronting Azad's accomplices in jail."
    },
];
export default products;