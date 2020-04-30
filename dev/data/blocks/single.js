//COBBLESTONE:
Compress.addBlock("single_compressed_cobblestone",[{name:"Single Compressed Cobblestone",texture:[["cobblestone_compressed",0]],inCreative:true}],"opaque");


Compress.addCraft(
{id:BlockID.single_compressed_cobblestone},
{id:4}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_cobblestone,"stone",1,true);

Block.setDestroyTime(BlockID.single_compressed_cobblestone,2);
Block.setDestroyLevel(BlockID.single_compressed_cobblestone,1);


//STONE:
Compress.addBlock("single_compressed_stone",[{name:"Single Compressed Stone",texture:[["stone_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_stone},
{id:1}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_stone,"stone",1,true);

Block.setDestroyTime(BlockID.single_compressed_stone,1.5);
Block.setDestroyLevel(BlockID.single_compressed_stone,1);


//SAND:
Compress.addBlock("single_compressed_blocksand",[{name:"Single Compressed Sand",texture:[["blocksand_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_blocksand},
{id:12,data:0}
);
//Compress.addCraft(BlockID.compressed_blocksand,12,1);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_blocksand,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_blocksand,0.5);
Block.setDestroyLevel(BlockID.single_compressed_blocksand,0);


//DIRT:
Compress.addBlock("single_compressed_dirt",[{name:"Single Compressed Dirt",texture:[["dirt_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_dirt},
{id:3}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_dirt,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_dirt,0.5);
Block.setDestroyLevel(BlockID.single_compressed_dirt,0);


//GRAVEL:
Compress.addBlock("single_compressed_gravel",[{name:"Single Compressed Gravel",texture:[["gravel_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_gravel},
{id:13}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_gravel,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_gravel,0.6);
Block.setDestroyLevel(BlockID.single_compressed_gravel,0);


//COBBLESTONE MOSSY:
Compress.addBlock("single_compressed_cobblestone_mossy",[{name:"Single Compressed Cobblestone Mossy",texture:[["cobblestonemossy_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_cobblestone_mossy},
{id:48}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_cobblestone_mossy,"stone",1,true);

Block.setDestroyTime(BlockID.single_compressed_cobblestone_mossy,2);
Block.setDestroyLevel(BlockID.single_compressed_cobblestone_mossy,1);


//ENDSTONE:
Compress.addBlock("single_compressed_endstone",[{name:"Single Compressed Endstone",texture:[["endstone_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_endstone},
{id:121}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_endstone,"stone",1,true);

Block.setDestroyTime(BlockID.single_compressed_endstone,3);
Block.setDestroyLevel(BlockID.single_compressed_endstone,1);


//CHARCOAL:
Compress.addBlock("single_compressed_charcoal",[{name:"Single Compressed Charcoal",texture:[["charcoal_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_charcoal},
{id:263,data:1}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_charcoal,"stone",1,true);

Block.setDestroyTime(BlockID.single_compressed_charcoal,5);
Block.setDestroyLevel(BlockID.single_compressed_charcoal,1);


//NETHERRACK:
Compress.addBlock("single_compressed_netherrack",[{name:"Single Compressed Netherrack",texture:[["netherrack_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_netherrack},
{id:87}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_netherrack,"stone",1,true);

Block.setDestroyTime(BlockID.single_compressed_netherrack,0.4);
Block.setDestroyLevel(BlockID.single_compressed_netherrack,1);


//SOULSAND:
Compress.addBlock("single_compressed_soulsand",[{name:"Single Compressed Soulsand",texture:[["soulsand_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_soulsand},
{id:88}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_soulsand,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_soulsand,0.5);
Block.setDestroyLevel(BlockID.single_compressed_soulsand,0);


//LOG OAK:
Compress.addBlock("compressed_logwood",[{name:"Block of Log Oak",texture:[["logoak_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_logwood},
{id:17,data:0}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_logwood,"wood",0,true);

Block.setDestroyTime(BlockID.compressed_logwood,2);
Block.setDestroyLevel(BlockID.compressed_logwood,0);


//LOG SPRUCE:
Compress.addBlock("compressed_logspruce",[{name:"Block of Log Spruce",texture:[["logspruce_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_logspruce},
{id:17,data:1}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_logspruce,"wood",0,true);

Block.setDestroyTime(BlockID.compressed_logspruce,2);
Block.setDestroyLevel(BlockID.compressed_logspruce,0);


//LOG BIRCH:
Compress.addBlock("compressed_logbirch",[{name:"Block of Log Birch",texture:[["logbirch_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_logbirch},
{id:17,data:2}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_logbirch,"wood",0,true);

Block.setDestroyTime(BlockID.compressed_logbirch,2);
Block.setDestroyLevel(BlockID.compressed_logbirch,0);


//LOG JUNGLE:
Compress.addBlock("compressed_logjungle",[{name:"Block of Log Jungle",texture:[["logjungle_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_logjungle},
{id:17,data:3}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_logjungle,"wood",0,true);

Block.setDestroyTime(BlockID.compressed_logjungle,2);
Block.setDestroyLevel(BlockID.compressed_logjungle,0);


//LOG ACACIA:
Compress.addBlock("compressed_logacacia",[{name:"Block of Log Acacia",texture:[["logacacia_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_logacacia},
{id:162,data:0}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_logacacia,"wood",0,true);

Block.setDestroyTime(BlockID.compressed_logacacia,2);
Block.setDestroyLevel(BlockID.compressed_logacacia,0);


//LOG DARK OAK:
Compress.addBlock("compressed_logdarkoak",[{name:"Block of Log Dark Oak",texture:[["logbigoak_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_logdarkoak},
{id:162,data:1}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_logdarkoak,"wood",0,true);

Block.setDestroyTime(BlockID.compressed_logdarkoak,2);
Block.setDestroyLevel(BlockID.compressed_logdarkoak,0);


//FEATHER:
Compress.addBlock("single_compressed_feather",[{name:"Single Compressed Feather",texture:[["feather_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_feather},
{id:288}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_feather,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_feather,0.5);
Block.setDestroyLevel(BlockID.single_compressed_feather,0);


//STRING:
Compress.addBlock("compressed_string",[{name:"Block of String",texture:[["string_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_string},
{id:287}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_string,"dirt",0,true);

Block.setDestroyTime(BlockID.compressed_string,0.5);
Block.setDestroyLevel(BlockID.compressed_string,0);


//PORKCHOP:
Compress.addBlock("single_compressed_porkchop",[{name:"Single Compressed Porkchop",texture:[["meatporkchop_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_porkchop},
{id:319}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_porkchop,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_porkchop,0.6);
Block.setDestroyLevel(BlockID.single_compressed_porkchop,0);


//CHICKEN:
Compress.addBlock("single_compressed_chicken",[{name:"Single Compressed Chicken",texture:[["meatchicken_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_chicken},
{id:365}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_chicken,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_chicken,0.6);
Block.setDestroyLevel(BlockID.single_compressed_chicken,0);


//BEEF:
Compress.addBlock("single_compressed_beef",[{name:"Single Compressed Beef",texture:[["meatbeef_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_beef},
{id:363}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_beef,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_beef,0.6);
Block.setDestroyLevel(BlockID.single_compressed_beef,0);


//FISH:
Compress.addBlock("single_compressed_fish",[{name:"Single Compressed Fish",texture:[["meatfish_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_fish},
{id:349}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_fish,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_fish,0.6);
Block.setDestroyLevel(BlockID.single_compressed_fish,0);


//BONE:
Compress.addBlock("single_compressed_bone",[{name:"Single Compressed Bone",texture:[["bone_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_bone},
{id:352}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_bone,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_bone,0.6);
Block.setDestroyLevel(BlockID.single_compressed_bone,0);


//EGG:
Compress.addBlock("single_compressed_egg",[{name:"Single Compressed Egg",texture:[["egg_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_egg},
{id:344,data:0}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_egg,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_egg,0.5);
Block.setDestroyLevel(BlockID.single_compressed_egg,0);


//LEATHER:
Compress.addBlock("single_compressed_leather",[{name:"Single Compressed Leather",texture:[["leather_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_leather},
{id:334}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_leather,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_leather,0.6);
Block.setDestroyLevel(BlockID.single_compressed_leather,0);


//BREAD:
Compress.addBlock("compressed_bread",[{name:"Block of Bread",texture:[["bread_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_bread},
{id:297}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_bread,"dirt",0,true);

Block.setDestroyTime(BlockID.compressed_bread,0.6);
Block.setDestroyLevel(BlockID.compressed_bread,0);


//COOKIE:
Compress.addBlock("compressed_cookie",[{name:"Block of Cookie",texture:[["cookie_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_cookie},
{id:357}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_cookie,"dirt",0,true);

Block.setDestroyTime(BlockID.compressed_cookie,0.6);
Block.setDestroyLevel(BlockID.compressed_cookie,0);


//POTATO:
Compress.addBlock("single_compressed_potato",[{name:"Single Compressed Potato",texture:[["croppotato_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_potato},
{id:392}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_potato,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_potato,0.6);
Block.setDestroyLevel(BlockID.single_compressed_potato,0);


//CARROT:
Compress.addBlock("single_compressed_carrot",[{name:"Single Compressed Carrot",texture:[["cropcarrot_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_carrot},
{id:391}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_carrot,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_carrot,0.6);
Block.setDestroyLevel(BlockID.single_compressed_carrot,0);


//NETHER WART:
Compress.addBlock("single_compressed_netherwart",[{name:"Single Compressed Nether Wart",texture:[["cropnetherwart_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_netherwart},
{id:372}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_netherwart,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_netherwart,0.6);
Block.setDestroyLevel(BlockID.single_compressed_netherwart,0);


//MELON:
Compress.addBlock("single_compressed_melon",[{name:"Single Compressed Melon",texture:[["cropmelon_compressed",1]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_melon},
{id:360}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_melon,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_melon,0.6);
Block.setDestroyLevel(BlockID.single_compressed_melon,0);


//APPLE:
Compress.addBlock("single_compressed_apple",[{name:"Single Compressed Apple",texture:[["cropapple_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_apple},
{id:260}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_apple,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_apple,0.6);
Block.setDestroyLevel(BlockID.single_compressed_apple,0);


//ROTTEN FLESH:
Compress.addBlock("single_compressed_rotten",[{name:"Single Compressed Rotten Flesh",texture:[["meatrotten_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_rotten},
{id:367}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_rotten,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_rotten,0.6);
Block.setDestroyLevel(BlockID.single_compressed_rotten,0);


//BLAZE ROD:
Compress.addBlock("single_compressed_blazerod",[{name:"Single Compressed Blaze Rod",texture:[["rodblaze_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_blazerod},
{id:369}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_blazerod,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_blazerod,0.5);
Block.setDestroyLevel(BlockID.single_compressed_blazerod,0);


//SPIDER EYE:
Compress.addBlock("single_compressed_spider_eye",[{name:"Single Compressed Spider Eye",texture:[["spidereye_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_spider_eye},
{id:375}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_spider_eye,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_spider_eye,0.5);
Block.setDestroyLevel(BlockID.single_compressed_spider_eye,0);


//ENDER PEARL:
Compress.addBlock("single_compressed_enderpearl",[{name:"Single Compressed Ender Pearl",texture:[["pearlender_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_enderpearl},
{id:368}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_enderpearl,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_enderpearl,0.5);
Block.setDestroyLevel(BlockID.single_compressed_enderpearl,0);


//SUGAR:
Compress.addBlock("single_compressed_sugar",[{name:"Single Compressed Sugar",texture:[["dustsugar_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_sugar},
{id:353}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_sugar,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_sugar,0.5);
Block.setDestroyLevel(BlockID.single_compressed_sugar,0);


//GUNPOWDER:
Compress.addBlock("single_compressed_gunpowder",[{name:"Single Compressed Gunpowder",texture:[["dustgunpowder_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_gunpowder},
{id:289}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_gunpowder,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_gunpowder,0.5);
Block.setDestroyLevel(BlockID.single_compressed_gunpowder,0);


//SUGAR CANE:
Compress.addBlock("single_compressed_sugarcane",[{name:"Single Compressed Sugar Cane",texture:[["cropsugarcane_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.single_compressed_sugarcane},
{id:338}
);

ToolAPI.registerBlockMaterial(BlockID.single_compressed_sugarcane,"dirt",0,true);

Block.setDestroyTime(BlockID.single_compressed_sugarcane,0.5);
Block.setDestroyLevel(BlockID.single_compressed_sugarcane,0);


//NETHER STAR:
Compress.addBlock("compressed_netherstar",[{name:"Block of Nether Star",texture:[["itemnetherstar_compressed",0]],inCreative:true}],"opaque");

Compress.addCraft(
{id:BlockID.compressed_netherstar},
{id:399}
);

ToolAPI.registerBlockMaterial(BlockID.compressed_netherstar,"dirt",0,true);

Block.setDestroyTime(BlockID.compressed_netherstar,0.6);
Block.setDestroyLevel(BlockID.compressed_netherstar,0);