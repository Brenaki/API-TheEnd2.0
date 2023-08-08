const en = [
    {
        language: 'en',
        biomes: {
         // Biomes
                1: 'The End',
                2: 'Small End islands',
                3: 'End midlands',
                4: 'End highlands',
                5: 'End barrens',
        },
        generated_structured: {
            // Generated Structures
            1: 'Central island',
            2: 'Outer islands',
            3: 'End spike',
            4: 'Obsidian plataform',
            5: 'Exit portal',
            6: 'End gateway',
            7: 'End city',
            8: 'End ship',
            9: 'Chorus tree'
        },
        terrain_features: {
            // Terrain Features
            Main_island: `On the main island, there are ten obsidian towers with Ender crystals on
                           top, which regenerate the dragon\'s health. The player must destroy the
                           crystals to weaken the dragon and be able to attack it. When the dragon
                           is defeated, it explodes and drops a lot of experience and a dragon egg.
                           The exit portal is activated and allows the player to return to the
                           normal world or explore the outer islands of the End, where there are
                           cities of the End and ships of the End with treasure and elytra. The
                           dragon can be respawned as many times as the player wants by placing four
                           Ender crystals around the exit portal.`,
            Outer_island: `The outer islands of the End are mysterious and isolated places that can
                            only be accessed after defeating the dragon of the End. They are made up
                            of floating islands of varying sizes and shapes, covered with chorus
                            plants that produce chorus fruits. On these islands, the player can find
                            End Cities, which are rare and complex structures that house shulkers
                            and treasure chests. Some End cities have End ships docked near them,
                            which contain even more valuable items, such as elytra and dragon\'s head.`
        },
        mobs: {
            // Mobs
            // Enderman
            1: {
                // Name
                name: 'Enderman',

                // Life
                life: 40,
                hearts: 20,

                // Information
                description: null,

                // Behavior
                behavior: 'Neutral',
                behavior_peaceful: 'Neutral',

                // Spawn
                spawn: 'The End with 0 level light',

                // Damage for life
                damage_for_life_peaceful: null,
                damage_for_life_easy: 4.5,
                damage_for_life_normal: 7,
                damage_for_life_hard: 10.5,

                // Damage for coração
                damage_for_hearts_peaceful: null,
                damage_for_hearts_easy: 2.25,
                damage_for_hearts_normal: 3.5,
                damage_for_hearts_hard: 5.25,

                // Special Attack
                special_attack: null,

                // Drops
                drop1: 'Ender pearl',
                drop2: '5 XP',
                drop3: 'Any block being held'
            },
            // Shulker
            2: {
                // Name
                name: 'Shulker',

                // Life
                life: 30,
                hearts: 10,

                // Information
                description: null,

                // Behavior
                behavior: 'Hostile',
                behavior_peaceful: 'Passive',

                // Spawn
                spawn: 'End city',

                // Damage for life
                damage_for_life_peaceful: null,
                damage_for_life_easy: 4,
                damage_for_life_normal: 4,
                damage_for_life_hard: 4,

                // Damage for coração
                damage_for_hearts_peaceful: null,
                damage_for_hearts_easy: 2,
                damage_for_hearts_normal: 2,
                damage_for_hearts_hard: 2,

                // Special Attack
                special_attack: {
                    1: {
                        name: 'Levitation',
                        damage_life: null, // Beacuse it's a damage normally
                        damage_hearts: null, // Beacuse it's a damage normally
                        duration: '10 seg'
                        }
                },

                // Drops
                drop1: 'Shulker shell',
                drop2: '5 XP'
            }
        },
        blocks: {
            //  Blocks
            Naturally_generated: {
                // Naturally generated
                1: 'Air',
                2: 'Bedrock',
                3: 'Obsidian',
                4: 'End stone',
                5: 'Chorus plant',
                6: 'Chorus flower'
            },
            Naturally_created: {
                // Naturally created
                1: 'Air',
                2: 'Bedrock',
                3: 'Obsidian',
                4: 'Wall torch',
                5: 'Fire',
                6: 'End portal',
                7: 'Dragon egg',
                8: 'End gateway',
                9: 'End crystal',
                10: 'Iron bars',
                11: 'End stone'
            },
            Structures: {
                // Structures
                1: 'Air',
                2: 'Obsidian',
                3: 'Chest',
                4: 'Magenta stained Glass',
                5: 'Brewing stand',
                6: 'Item frame',
                7: 'Magenta wall banner',
                8: 'End rod',
                9: 'Purpur block',
                10: 'Purpur pillar',
                11: 'Purpur slab',
                12: 'Purpur stairs',
                13: 'End stone bricks',
                14: 'Dragon wall head',
                15: 'Ender chest',
                16: 'Ladder',
            }
        }
    }
]

const pt = [
    {
        language: 'pt',
        biomes: {
            // Biomes
                1: 'O End',
                2: 'Pequenas ilhas do End',
                3: 'Zona média do End',
                4: 'Zona elevada do End',
                5: 'Zona árida do End'
           },
           generated_structured: {
               // Generated Structures
                1: 'Ilha central',
                2: 'Ilhas externas',
                3: 'Pilar do End',
                4: 'Plataforma de obsidiana',
                5: 'Portal de saida',
                6: 'Passagem do End',
                7: 'Cidade do End',
                8: 'Barco do End',
                9: 'Árvore do coro'
           },
           terrain_features: {
               // Terrain Features
               Main_island: `Na ilha principal, há dez torres de obsidiana com cristais do End no topo,
              que regeneram a saúde do dragão. O jogador deve destruir os cristais para
              enfraquecer o dragão e poder atacá-lo. Quando o dragão é derrotado,
              ele explode e deixa cair muita experiência e um ovo de dragão. O portal de
              saída é ativado e permite ao jogador voltar ao mundo normal ou explorar as
              ilhas externas do End, onde há cidades do End e navios do End com tesouros e
              elytras. O dragão pode ser renascido quantas vezes o jogador quiser,
              colocando quatro cristais do End ao redor do portal de saída.`,
               Outer_island: `As ilhas externas do End são lugares misteriosos e isolados que só podem ser
              acessados após derrotar o dragão do End. Elas são compostas por ilhas
              flutuantes de variados tamanhos e formas, cobertas por plantas do coro que
              produzem frutas do coro. Nessas ilhas, o jogador pode encontrar cidades do
              End, que são estruturas raras e complexas que abrigam shulkers e baús com
              tesouros. Algumas cidades do End têm navios do End ancorados perto delas,
              que contêm itens ainda mais valiosos, como elytras e cabeça de dragão.`
           },
           mobs: {
           },
           blocks: {
               //  Blocks
               Naturally_generated: {
                   // Naturally generated
                   1: 'Ar',
                   2: 'Rocha-mãe',
                   3: 'Obsidian',
                   4: 'Pedra do End',
                   5: 'Planta do coro',
                   6: 'Flor do coro'
               },
               Naturally_created: {
                   // Naturally created
                   1: 'Ar',
                    2: 'Rocha-mãe',
                    3: 'Obsidiana',
                    4: 'Tocha na parede',
                    5: 'Fogo',
                    6: 'Portal do End',
                    7: 'Ovo do dragão',
                    8: 'Passagem do End'
               },
               Structures: {
                   // Structures
                   1: `Ar`,
                    2: `Obsidiana`,
                    3: `Bau`,
                    4: `Vidro roxo`,
                    5: `Suporte de porções`,
                    6: `Moldura`,
                    7: `Estandarte magenta na parede`,
                    8: `Lâmpada do End`,
                    9: `Bloco de púrpura`,
                    10: `Pilar de púrpura`,
                    11: `Laje de púrpura`,
                    12: `Escadas de púrpura`,
                    13: `Tijolos depedra do End`,
                    14: `Cabeça do dragão`
               }
           }
       }
]