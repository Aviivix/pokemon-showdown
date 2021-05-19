export const Formats: FormatList = [
	{
		section: "National Dex"
	},
	{
		name: "[Gen 8] National Dex RU",
		threads: [
			`&bullet; <a href="https://discord.gg/CrQ5Sx7zVC">National Dex RU Metagame Discussion</a>`,
			`&bullet; <a href="https://docs.google.com/document/d/1RiLRzkWPwpM3ssWAPk1qNPR04gP-klR_6dEAZJq5m6Y/edit?usp=sharing">National Dex RU Viability Rankings</a>`,
		],
		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex'],
		banlist: [
			// National Dex OU
			'Blissey', 'Chansey', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Clefable', 'Corviknight', 'Excadrill', 'Ferrothorn',
			'Garchomp', 'Gliscor', 'Greninja', 'Gyarados-Mega', 'Heatran', 'Kartana', 'Kommo-o', 'Kyurem', 'Landorus-Therian', 'Lopunny-Mega',
			'Magnezone', 'Mawile-Mega', 'Medicham-Mega', 'Pelipper', 'Rillaboom', 'Scizor-Mega', 'Serperior', 'Slowbro-Base', 'Swampert-Mega',
			'Tangrowth', 'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Tyranitar', 'Victini', 'Volcarona', 'Zapdos-Base',
			'ND UUBL', // National Dex UUBL
			'Drizzle', 'Drought',
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
			// National Dex UU
			'Absol-Mega', 'Aegislash', 'Aggron-Mega', 'Altaria-Mega', 'Alomomola', 'Amoonguss', 'Arctovish', 'Arctozolt', 'Beedrill-Mega', 'Bisharp', 
			'Breloom', 'Buzzwole', 'Celesteela', 'Chesnaught', 'Crobat', 'Donphan', 'Dragonite', 'Hippowdon', 'Honchkrow', 'Hoopa-Unbound', 'Infernape', 
			'Jirachi', 'Keldeo', 'Krookodile', 'Mamoswine', 'Mandibuzz', 'Manectric-Mega', 'Melmetal', 'Mew', 'Mienshao', 'Moltres-Base', 'Muk-Alola', 
			'Nihilego', 'Porygon2', 'Porygon-Z', 'Regieleki', 'Ribombee', 'Rotom-Heat', 'Rotom-Wash', 'Sableye-Mega', 'Scizor', 'Shuckle', 'Skarmory', 
			'Slowking', 'Slowking-Galar', 'Staraptor', 'Swampert', 'Umbreon', 'Urshifu-Rapid-Strike', 'Weavile',
			// National Dex RUBL
			'Alakazam', 'Raichu-Alola', 'Crawdaunt', 'Conkeldurr', 'Darmanitan', 'Diggersby', 'Durant', 'Dracozolt', 'Grimmsnarl', 'Haxorus', 'Heracross',
			'Lycanroc-Dusk', 'Sharpedo-Mega', 'Obstagoon', 'Moltres-Galar', 'Primarina', 'Reuniclus', 'Salamence', 'Scolipede', 'Tapu Bulu', 'Terrakion', 
			'Tornadus', 'Venomoth', 'Zeraora',
			'ND RUBL',
		],
		// Used to distinguish RU from below RU in the client
		restricted: [
			'Aerodactyl', 'Arcanine', 'Articuno-Galar', 'Azelf', 'Araquanid', 'Bronzong', 'Celebi', 'Chandelure', 'Chesnaught', 'Cloyster', 'Cobalion', 
			'Cresselia', 'Crobat', 'Deoxys-Defense', 'Diancie', 'Doublade', 'Emboar', 'Empoleon', 'Feraligatr', 'Flygon', 'Gardevoir', 'Gastrodon', 
			'Gligar', 'Golisopod', 'Goodra', 'Hatterene', 'Hoopa', 'Houndoom-Mega', 'Incineroar', 'Jellicent', 'Klefki', 'Linoone', 'Lucario', 'Lycanroc', 
			'Mantine', 'Marowak-Alola', 'Meloetta', 'Metagross', 'Mienshao', 'Milotic', 'Mimikyu', 'Necrozma', 'Nidoking', 'Nidoqueen', 'Noivern', 'Pidgeot-Mega', 
			'Polteageist', 'Raikou', 'Registeel', 'Rhyperior', 'Roserade', 'Rotom-Mow', 'Salazzle', 'Seismitoad', 'Sharpedo', 'Shaymin', 'Sceptile-Mega', 
			'Shuckle', 'Sirfetchd', 'Slowbro-Galar', 'Snorlax', 'Stakataka', 'Starmie', 'Steelix-Mega', 'Suicune', 'Sylveon', 'Tentacruel', 'Togekiss', 
			'Toxtricity', 'Tyrantrum', 'Vaporeon', 'Virizion', 'Volcanion', 'Weezing-Galar', 'Zarude', 'Zoroark', 'Zygarde-10%',
		],
	},
];
