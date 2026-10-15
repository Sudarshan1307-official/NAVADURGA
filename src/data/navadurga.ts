/**
 * Complete, verified devotional data for the Nine Forms of Goddess Durga (Navadurga)
 * Shlokas are strictly presented in accurate English transliteration (no Devanagari script).
 * Sourced from Markandeya Purana / Durga Saptashati / Devi Kavacham.
 */

export interface NavadurgaGoddess {
  id: number;
  slug: string;
  name: string;
  tithi: string;
  dayNumber: string;
  sanskritTitle: string;
  epithet: string;
  image: string;
  colorTheme: string;
  flower: string;
  shloka: string;
  shlokaMeaning: string;
  shortMantra: string;
  audioSrc: string;
  significance: {
    title: string;
    description: string;
    detailedEssence: string;
  };
  vahana: {
    title: string;
    name: string;
    symbolism: string;
  };
  ayudhaMudra: {
    title: string;
    items: string;
    description: string;
  };
  cosmicPlane: {
    title: string;
    graha: string;
    chakra: string;
    element: string;
    description: string;
  };
}

export const NAVADURGA_DATA: NavadurgaGoddess[] = [
  {
    id: 1,
    slug: "shailaputri",
    name: "Maa Shailaputri",
    tithi: "Pratipada Tithi",
    dayNumber: "01",
    sanskritTitle: "Prathama Navadurga",
    epithet: "Daughter of the Mountain King Himavat",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1WlAseTxF3nLcZ5ZGevlpWRYNkR3s7EJkELY9n3-F2DIytzvi2Ia2i2OF8Ud5Jlr4FvrEgTL6KCugr2kWvDzDMSj-NFhHtBRSdBYi98k85CLSLby9HVmCbQojJWpwyB2vq-v474JfobDr2oPc48xIZHBz__aZVhUJ7KmizPOleYJiAqWpOw7aTUqZdQVQ7UvEoSp7GUqgvxgBkuzsVbheci6ZVgVMQdoOtgyf0fPFALtBKYJ9l7QRjwJXPh",
    colorTheme: "#e89a3c",
    flower: "White Hibiscus & Jasmine",
    shloka: "VANDE VANCHHITA LABHAYA CHANDRARDHAKRITASHEKHARAM | VRISHARUDHAM SHULADHARAM SHAILAPUTRIM YASHASVINIM ||",
    shlokaMeaning: "I bow down to the illustrious Mother Shailaputri, who fulfills all sacred desires, who is adorned with the crescent moon upon her crown, who rides the sacred bull Nandi, and who holds the golden trident.",
    shortMantra: "OM DEVI SHAILAPUTRYAI NAMAH",
    audioSrc: "/audio/shloka-1.wav",
    significance: {
      title: "Supreme Patience & Earth Foundation",
      description: "Daughter of King Himavat. Prime source of patience, pure earth energy, awakening Muladhara root stability.",
      detailedEssence: "Born as the daughter of the Himalayas following Sati's self-immolation, Shailaputri embodies the unshakeable firmness of mountains and the primordial foundation of spiritual sadhana."
    },
    vahana: {
      title: "Vahana: Nandi (Sacred Bull)",
      name: "Vrishabha / Nandi",
      symbolism: "Mounted on the sacred white bull, embodying steadfast righteousness (Dharma), unwavering patience, and mastery over sensory impulses."
    },
    ayudhaMudra: {
      title: "Ayudha & Mudra",
      items: "Trishula & Radiant Kamal",
      description: "Holds a golden Trishula (Trident) in her right hand piercing the three realms of illusion, and a blooming pink lotus in her left hand symbolizing immaculate purity."
    },
    cosmicPlane: {
      title: "Cosmic Plane & Awakening",
      graha: "Chandra (Moon)",
      chakra: "Muladhara (Root Chakra)",
      element: "Prithvi (Earth)",
      description: "Governing planet Chandra; awakening the Muladhara chakra to ground the spiritual seeker in immutable devotion."
    }
  },
  {
    id: 2,
    slug: "brahmacharini",
    name: "Maa Brahmacharini",
    tithi: "Dvitiya Tithi",
    dayNumber: "02",
    sanskritTitle: "Dvitiya Navadurga",
    epithet: "The Seeker of Absolute Sacred Wisdom",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1V5gY0E2nrcE6yKfg54IpLYTPY3GTa9CcCiI1pMoCCnKTtgRXx0y5E36CONgWalpAlHqtH-tBTVDKlKD8wmyYj2mJbcP6kwyv_vCJQFkkWPpbz3PWPPTv2k6_hwQsKm5HS3jflDrFyfVrwoBRZ0PKAT9t4cAgWte0LV0zSNgscbtTzXAKpGTY-Wbn9W0LtrtWG1w9yVjLBVGxtBSQAG4YShpkHt7k0ElsciE9ULkKpvyyTV4ziFGDZ_FF5E",
    colorTheme: "#e3a83b",
    flower: "Chrysanthemum & White Lotus",
    shloka: "DADHANA KARAPADMAYAM AKSHAMALAKAMANDALU | DEVI PRASIDATU MAYI BRAHMACHARINY ANUTTAMA ||",
    shlokaMeaning: "Holding the rosary of rudraksha beads in her right hand and the sacred water-pot in her left, may the peerless Mother Brahmacharini bestow her supreme grace upon me.",
    shortMantra: "OM DEVI BRAHMACHARINYAI NAMAH",
    audioSrc: "/audio/shloka-2.wav",
    significance: {
      title: "Tapasya, Penance & Ascetic Grace",
      description: "The embodiment of monastic discipline and pure focus. Bestower of restraint, eternal spiritual knowledge, and dispassion.",
      detailedEssence: "Brahmacharini performed thousands of years of austere penance in the wilderness to attain Lord Shiva as her consort, exemplifying supreme dedication and unwavering meditation."
    },
    vahana: {
      title: "Vahana: Barefoot Ascetic",
      name: "Barefoot on Sacred Earth",
      symbolism: "Walks barefoot upon sacred stones, untethered by worldly vehicles, symbolizing sensory transcendence and direct contact with Mother Earth."
    },
    ayudhaMudra: {
      title: "Ayudha & Mudra",
      items: "Japamala & Kamandalu",
      description: "Holds a Japamala (rosary of 108 beads) for perpetual mantra recitation in her right hand, and the holy Kamandalu (water vessel) of amrita in her left."
    },
    cosmicPlane: {
      title: "Cosmic Plane & Awakening",
      graha: "Mangala (Mars)",
      chakra: "Svadhisthana (Sacral Chakra)",
      element: "Agni & Jala (Fire & Water)",
      description: "Governed by Mars; purifying Svadhisthana chakra to transform passionate desires into refined spiritual willpower."
    }
  },
  {
    id: 3,
    slug: "chandraghanta",
    name: "Maa Chandraghanta",
    tithi: "Tritiya Tithi",
    dayNumber: "03",
    sanskritTitle: "Tritiya Navadurga",
    epithet: "Bearer of the Resonant Crescent Bell",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1Wy5rUcrYEtwF33li4YEucDOvnpTwNNP2w-FA_gnMXOlr00P6KcHt1doilvoapJ7H7ifpO--vpsKeb4GF_a8tAKkoA57Cr4ss_K1y9dSy5D-10oZtOGcGMQdSJnnjmH0L9CurhuMxo65IUOEtZySblFRhL0CCtc7jEBFUw2OCJlZ323QKLY4A29fCH1xzJ5KdtjRLJmD6WoQBxEEwT_GbjZ5durBhVuo0m2RbSncKmKZy5E5-iQ8kLuxoEO",
    colorTheme: "#e07828",
    flower: "Red Jasmine & Lotus",
    shloka: "PINDAJA PRAVARARUDHA CHANDAKOPASTRADAIR YUTA | PRASADAM TANUTE MAHYAM CHANDRAGHANTETI VISHRUTA ||",
    shlokaMeaning: "Mounted upon a ferocious golden tigress, armed with terrible weapons, may Goddess Chandraghanta shower her divine grace and peace upon me.",
    shortMantra: "OM DEVI CHANDRAGHANTAYAI NAMAH",
    audioSrc: "/audio/shloka-3.wav",
    significance: {
      title: "Supreme Courage, Serenity & Sonic Protection",
      description: "Supreme courage, serene poise, peace, and sacred bell resonance dispelling demonic forces and inner panic.",
      detailedEssence: "Her forehead is graced by a luminous crescent moon resembling a temple bell (Ghanta). Its celestial resonance dispels evil spirits and purifies the atmosphere with divine calm."
    },
    vahana: {
      title: "Vahana: Golden Tigress",
      name: "Vyaghra (Golden Tigress)",
      symbolism: "Rides a ferocious golden tigress representing sovereign valor, royal fearlessness, and absolute mastery over aggressive instincts."
    },
    ayudhaMudra: {
      title: "Ayudha & Mudra",
      items: "Ten Sacred Weapons & Mudras",
      description: "Ten-armed mother wielding Trishula, Gada, Khadga, Bow, Arrow, Temple Bell, Kamandalu, and granting Abhaya & Varada blessings."
    },
    cosmicPlane: {
      title: "Cosmic Plane & Awakening",
      graha: "Shukra (Venus)",
      chakra: "Manipura (Solar Plexus Chakra)",
      element: "Agni (Cosmic Fire)",
      description: "Governing planet Shukra; awakening Manipura chakra to bestow radiant vitality, fearlessness, and inner peace."
    }
  },
  {
    id: 4,
    slug: "kushmanda",
    name: "Maa Kushmanda",
    tithi: "Chaturthi Tithi",
    dayNumber: "04",
    sanskritTitle: "Chaturthi Navadurga",
    epithet: "Creator of the Universal Solar Egg",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1WlJB0gNRX1amzoia12ougsNzz7EQB0K26G5vbr9m4MV0t0IKzJu1HEO-cf8MIc6RgGQ5wEzfl6ESomxRijlcjcOV9zHc2_9Ku4IsZzhRIMiXuLD7R8MKsr-sy-9J7GZXX_0l10sElQhaxrf4hLBFFgcg4bleBPlWrYwd7TPaHPJ5u9q-UQN8n_b3aQFwQK-RoJLT6PyGYjcb_EIbC6U3TKF9o54HgKeYDo0kzfbZSsBuHfcWgGResELodd",
    colorTheme: "#e88e22",
    flower: "Orange Marigold & Red Hibiscus",
    shloka: "SURASAMPURNA KALASHAM RUDHIRAPLUTAMEVA CHA | DADHANA HASTAPADMAYAM KUSHMANDA SHUBHADASTU ME ||",
    shlokaMeaning: "Holding in her lotus hands a golden jar overflowing with nectar, may Goddess Kushmanda, the radiant creator of the cosmos, grant auspiciousness to me.",
    shortMantra: "OM DEVI KUSHMANDAYAI NAMAH",
    audioSrc: "/audio/shloka-4.wav",
    significance: {
      title: "Cosmic Solar Architect & Creation",
      description: "Created the cosmic egg (Brahmanda) through her luminous divine smile when only darkness enveloped the primordial void.",
      detailedEssence: "Kushmanda resides within the blazing heart of the Sun God (Surya Mandala). Her luminosity sustains all solar energy and infuses all living beings with life and warmth."
    },
    vahana: {
      title: "Vahana: Royal Lion",
      name: "Simha (Golden Lion)",
      symbolism: "Rides the royal lion symbolizing unstoppable solar majesty, unyielding authority, and boundless creative vitality."
    },
    ayudhaMudra: {
      title: "Ayudha & Mudra",
      items: "Ashtabhuja (Eight Divine Emblems)",
      description: "Wields Sudarshana Chakra, Gada, Bow, Arrow, Amrita Kalasha, Sacred Lotus, and the rosary of all eight Siddhis."
    },
    cosmicPlane: {
      title: "Cosmic Plane & Awakening",
      graha: "Surya (Sun God)",
      chakra: "Anahata (Heart Chakra)",
      element: "Tejas / Solar Agni",
      description: "Governs Surya; opening the Anahata heart chakra to radiate warmth, unconditional generosity, and healing luminescence."
    }
  },
  {
    id: 5,
    slug: "skandamata",
    name: "Maa Skandamata",
    tithi: "Panchami Tithi",
    dayNumber: "05",
    sanskritTitle: "Panchama Navadurga",
    epithet: "Mother of Commander Lord Kartikeya",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1WorzG19UbMzwnTY2gAmE4RjuJVY-XCsnpdZ9Z40CaQDWneD57xgFP4tSr9IeaQRi-SdX7GplcnbWwcaTigALSS1wVy5XtaI9Srqm-elOamXBuMqYQZMe4YaHMZF1HaERHjCm_bMH8u7foHu6Qry7ckGellyNxuWNM2OHmMwcunu6IUXRqNDr3pP2vJq8Qlb-oY0nA5t6XyhalIvuPa9JuT4zlrMeX96eg8DWax3rfzpT6hEntpjQ6D6ZJq",
    colorTheme: "#f0b332",
    flower: "Yellow Rose & Jasmine",
    shloka: "SINGHASANAGATA NITYAM PADMANCHITA KARADVAYA | SHUBHADA STU SADA DEVI SKANDAMATA YASHASVINI ||",
    shlokaMeaning: "Eternally seated upon the throne of lions with both lotus hands holding blossoms, may glorious Goddess Skandamata forever grant auspicious blessings.",
    shortMantra: "OM DEVI SKANDAMATAYAI NAMAH",
    audioSrc: "/audio/shloka-5.wav",
    significance: {
      title: "Maternal Compassion & Supreme Wisdom",
      description: "Mother of Commander Lord Skanda (Kartikeya). Bestows pure wisdom, boundless maternal protection, and spiritual liberation.",
      detailedEssence: "Holding baby Lord Skanda upon her lap, Skandamata fulfills the heartfelt wishes of devotees. Revering her brings the dual benediction of both Mother and Divine Son."
    },
    vahana: {
      title: "Vahana: Golden Lion & Lotus",
      name: "Simha & Padmasana",
      symbolism: "Seated upon the fierce lion and blooming pink lotus (Padmasana), balancing supreme courage with tender spiritual serenity."
    },
    ayudhaMudra: {
      title: "Ayudha & Mudra",
      items: "Twin Lotuses & Infant Skanda",
      description: "Four-armed mother holding infant Skanda with one arm, twin fragrant lotus blooms in two hands, and bestowing Abhaya Mudra."
    },
    cosmicPlane: {
      title: "Cosmic Plane & Awakening",
      graha: "Budha (Mercury)",
      chakra: "Vishuddha (Throat Chakra)",
      element: "Akasha (Ether)",
      description: "Governed by Budha; purifying Vishuddha chakra to awaken pure sacred speech, intuition, and intellectual clarity."
    }
  },
  {
    id: 6,
    slug: "katyayani",
    name: "Maa Katyayani",
    tithi: "Shashthi Tithi",
    dayNumber: "06",
    sanskritTitle: "Shashthi Navadurga",
    epithet: "Slayer of the Demon Mahishasura",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1WUkE9xJWIg-Wg2P5leHVIibd2tMrP7FLMlk-7LHi5_sFCz8q4MTj0S6466MasqrkAMEQ53ckkVaYY5n2oJ3N9TZpfX96xSRQ8rlkPVew2xtGF-k27XYWA4dEspVHptKrWp4h5TEu_gq_1Ro8JbbQYM-c5BgLGEtXLNhgrwSWEQjC8NI3VoCo64PoKCyI_IQA6dPUjDtUDibiUC0f6I8Qh3I1RB7Jkp1cXmmGuoXbP8THbJ4uitUJ_YVhPr",
    colorTheme: "#c9351e",
    flower: "Red Marigold & Hibiscus",
    shloka: "CHANDRAHASOJJVALAKARA SHARDULAVARAVAHANA | KATYAYANI SHUBHAM DADYADEVI DANAVAGHATINI ||",
    shlokaMeaning: "Her hand radiant with the flashing Chandrahasa sword, riding the majestic lion, may Goddess Katyayani, slayer of demons, bestow auspicious grace.",
    shortMantra: "OM DEVI KATYAYANYAI NAMAH",
    audioSrc: "/audio/shloka-6.wav",
    significance: {
      title: "Mahishasura Mardini & Righteous Fire",
      description: "Incarnated from the aggregated fiery radiance of the Devas to slay the demon Mahishasura and restore universal cosmic Dharma.",
      detailedEssence: "Revered at the hermitage of Sage Katyayana, she personifies fierce defensive wrath directed against arrogance, cruelty, and spiritual ignorance."
    },
    vahana: {
      title: "Vahana: Shardula (Lion)",
      name: "Shardula (Majestic Lion)",
      symbolism: "Mounted on the ferocious royal lion symbolizing fearless righteousness, relentless valour, and supreme sovereign might."
    },
    ayudhaMudra: {
      title: "Ayudha & Mudra",
      items: "Chandrahasa Sword & Sacred Lotus",
      description: "Radiant curved sword (Chandrahasa) that cleaves evil, alongside a sacred lotus; right hands bestow Abhaya and Varada blessings."
    },
    cosmicPlane: {
      title: "Cosmic Plane & Awakening",
      graha: "Brihaspati (Jupiter)",
      chakra: "Ajna (Third Eye Chakra)",
      element: "Tejas (Divine Fire)",
      description: "Governed by Brihaspati; activating the Ajna chakra to endow the devotee with infallible insight, discernment, and spiritual command."
    }
  },
  {
    id: 7,
    slug: "kalaratri",
    name: "Maa Kalaratri",
    tithi: "Saptami Tithi",
    dayNumber: "07",
    sanskritTitle: "Saptami Navadurga",
    epithet: "Annihilator of Darkness & Cosmic Night",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1U0H4cHaprXniSAJjKSLOPcbRbP5vVdBIu36hF3SHyJGaPFuDM_nduMIGBichP3wWX5cnn55IyC7C_bBus72A4rhVYIVjSXW2UmQEpKt225wc-OJssxT-d5O9lSG4Qtex77AYM2zPCTBGK13SfuKb5Hl7rh1KUDcpTFB85-XR6xDzQBcG4tQ97gDDoH1MXs09olXD8C6lyFO_QaX9vZqbsSfHXYbR6p2yLDkNCDGoOQIoz-BBL7VNWtWp64",
    colorTheme: "#40195e",
    flower: "Krishna Kamal & Night-Blooming Jasmine",
    shloka: "EKAVENI JAPAKARNAPURA NAGNA KHARASTHITA | LAMBOSHTHI KARNIKAKARNI TAILABHYAKTA SHARIRINI ||",
    shlokaMeaning: "With a single braid of dark hair, adorned with hibiscus flowers, riding upon a steadfast donkey, she destroys all darkness and protects her devotees.",
    shortMantra: "OM DEVI KALARATRYAI NAMAH",
    audioSrc: "/audio/shloka-7.wav",
    significance: {
      title: "Shubhankari: Fierce Destroyer of Illusions",
      description: "Fierce destroyer of darkness, fear, evil spirits, and demonic illusion; bestowing absolute fearlessness and auspicious boons.",
      detailedEssence: "Her complexion is dark as the cosmic night, breathing incandescent fire. Yet she is Shubhankari—the benevolent grantor of boons—ensuring her devotees never experience fear."
    },
    vahana: {
      title: "Vahana: Steadfast Donkey",
      name: "Gardabha / Khara",
      symbolism: "Mounted on the humble donkey, embodying endurance, boundless patience, and humility beneath cosmic authority."
    },
    ayudhaMudra: {
      title: "Ayudha & Mudra",
      items: "Curved Iron Cleaver & Thorn Dagger",
      description: "Wields a curved iron cleaver (Khadga) and thorn dagger in left hands; upper right hands bestow fearlessness (Abhaya) and boons (Varada)."
    },
    cosmicPlane: {
      title: "Cosmic Plane & Awakening",
      graha: "Shani (Saturn)",
      chakra: "Sahasrara (Crown Activation)",
      element: "Vayu & Darkness",
      description: "Governed by Shani; dissolving past karmic debts and lifting the veil of fear from the devotee's crown consciousness."
    }
  },
  {
    id: 8,
    slug: "mahagauri",
    name: "Maa Mahagauri",
    tithi: "Ashtami Tithi",
    dayNumber: "08",
    sanskritTitle: "Ashtami Navadurga",
    epithet: "Pristine Purity & Absolute Serenity",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1VOr5zI5Nlc23DaRrybyWcdA0iWUXZN3rzFKVdPyWeyi936G_bB_iBNcuGzPCeFf8K510IUxSr9G0jTHBslv6mo6U1gGO1cUTQpqHFO-jkUBWVIH4mbxz6k5HZV6PRQOk9D1n3eLr_NG3sgNTH9Gqb2JcTBTSpTOyyIJn1-wCqke61piLlRgvlORShpGBSdP70IdAkOe5rnHwqKBtZ4uyXevmYXYVZkd3M69wDSSAvzFVaxsfB_-ICqpAY",
    colorTheme: "#cca447",
    flower: "White Mogra & Jasmine",
    shloka: "SHVETE VRISHE SAMARUDHA SHVETAMBARADHARA SHUCHIH | MAHAGAURI SHUBHAM DADYAN MAHADEVAPRAMODADA ||",
    shlokaMeaning: "Mounted upon a sacred white bull, clad in pure white garments, immaculate and tranquil, may Goddess Mahagauri, the eternal delight of Mahadeva, grant auspiciousness.",
    shortMantra: "OM DEVI MAHAGAURYAI NAMAH",
    audioSrc: "/audio/shloka-8.wav",
    significance: {
      title: "Absolute Purity, Grace & Karma Cleansing",
      description: "Absolute purity and serenity. Cleanses all accumulated karmic residue and bestows deep inner peace and radiant auspiciousness.",
      detailedEssence: "After eons of rigorous penance, Lord Shiva washed her darkened body with the holy waters of Ganga, turning her skin effulgent like white lightning and moonbeams."
    },
    vahana: {
      title: "Vahana: Sacred White Bull",
      name: "Shveta Vrishabha (Nandi)",
      symbolism: "Mounted on the immaculate white bull, symbolizing tranquil Dharma, serene stability, and innocence of mind."
    },
    ayudhaMudra: {
      title: "Ayudha & Mudra",
      items: "Trishula & Sacred Damaru",
      description: "Holds the golden Trishula and sacred resonant Damaru drum; right hands grant Abhaya and Varada blessings."
    },
    cosmicPlane: {
      title: "Cosmic Plane & Awakening",
      graha: "Rahu (Purified Light)",
      chakra: "Soma Chakra",
      element: "Light & Pure Water",
      description: "Neutralizes Rahu afflictions; opening Soma chakra to shower nectarine tranquility and spiritual purity across the aura."
    }
  },
  {
    id: 9,
    slug: "siddhidatri",
    name: "Maa Siddhidatri",
    tithi: "Maha Navami Sanctum",
    dayNumber: "09",
    sanskritTitle: "Navama Navadurga",
    epithet: "Sovereign Bestower of All Eighteen Mystic Perfections",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1Uaii3dgKBn0hEGgHwjesq1DG3hqBaQIT3eJu0o6Ku-T7IKiK5Av0g5mos5K4HLs_WJOZd_jg3RmttHdsCArPdsd50BpM-3V7jLTqdS2_g4_v5aUFycUnYwhpvd_OXEFIoeT2TMUCDXPeAl26ExJIrMXB6OyAxdJkR9IeDIcR_2_RV-2pZktnOEncTmTuenWQM_-If9G9W25XZ9iW-a4_8egc9vOG2RRYwqQ87GITj2UR00V5h6g8UqbKvS",
    colorTheme: "#d69420",
    flower: "Pink Lotus & Champa",
    shloka: "SIDDHA GANDHARVA YAKSHADYAIR ASURAIR AMARAIR API | SEVYAMANA SADA BHUYAT SIDDHIDA SIDDHIDAYINI ||",
    shlokaMeaning: "Eternally adored and attended by Siddhas, Gandharvas, Yakshas, Asuras, and Devas, may Mother Siddhidatri, the giver of all mystic perfections, bless us forever.",
    shortMantra: "OM DEVI SIDDHIDATRYAI NAMAH",
    audioSrc: "/audio/shloka-9.wav",
    significance: {
      title: "Sovereign Bestower of Ashta Siddhis & Unity",
      description: "Bestower of all 18 mystic perfections (Ashta Siddhis & Nava Nidhis). Source of Lord Shiva's Ardhanarishwara form.",
      detailedEssence: "By worshipping Siddhidatri, Lord Shiva attained all divine siddhis and merged with Adi Shakti to manifest the half-female Ardhanarishwara form of supreme cosmic equilibrium."
    },
    vahana: {
      title: "Vahana: Royal Lion & Lotus",
      name: "Simha & Pink Lotus (Padmasana)",
      symbolism: "Seated on the blooming 100-petaled pink lotus with the royal lion at her side, representing complete spiritual mastery and pristine detachment."
    },
    ayudhaMudra: {
      title: "Ayudha & Mudra",
      items: "Sudarshana Chakra, Gada, Shankha & Lotus",
      description: "Four-armed mother holding the spinning Sudarshana Chakra, golden Gada mace, sacred conch Shankha, and blooming lotus."
    },
    cosmicPlane: {
      title: "Cosmic Plane & Awakening",
      graha: "Ketu (Moksha Karaka)",
      chakra: "Sahasrara (Crown Center)",
      element: "Pure Consciousness (Brahman)",
      description: "Governed by Ketu; opening the Sahasrara thousand-petaled lotus for ultimate spiritual liberation, unity, and bliss."
    }
  }
];

export const UNIVERSAL_NAVADURGA_SHLOKA = 
  "PRATHAMA SHAILAPUTRI CHA DVITIYA BRAHMACHARINI | TRITIYA CHANDRAGHANTETI KUSHMANDETI CHATURTHAKAM || " +
  "PANCHAMA SKANDAMATETI SHASHTHA KATYAYANITI CHA | SAPTAMA KALARATRITI MAHAGAURITI CHASHTAMAM || " +
  "NAVAMA SIDDHIDATRI CHA NAVADURGA PRAKIRTITAH ||";
