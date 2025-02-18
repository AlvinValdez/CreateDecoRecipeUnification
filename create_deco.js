//const decals = ["createdeco:decal_warning","createdeco:decal_creeper","createdeco:decal_skull"];
const decals = ["createdeco:decal_warning","createdeco:decal_creeper","createdeco:decal_skull","createdeco:decal_flow","createdeco:decal_ice","createdeco:decal_radioactive","createdeco:decal_top_left","createdeco:decal_up","createdeco:decal_top_right","createdeco:decal_left","createdeco:decal_cross","createdeco:decal_right","createdeco:decal_down_left","createdeco:decal_down","createdeco:decal_down_right","createdeco:decal_fluid","createdeco:decal_fire","createdeco:decal_electrical","createdeco:decal_fire_diamond","createdeco:decal_no_entry"];
ServerEvents.recipes(create_deco => {
	//Recipes that use string  
   create_deco.replaceInput(
    {
      output: [
        'createdeco:andesite_mesh_fence',
		'createdeco:brass_mesh_fence',
		'createdeco:iron_mesh_fence',
		'createdeco:copper_mesh_fence',
		'createdeco:industrial_iron_mesh_fence',
		'createdeco:zinc_mesh_fence'
      ],
    },
    '#forge:string',
    '#forge:string'
  ),
  //Recipes that use Brass sheets
  create_deco.replaceInput(
    {
      output: [
        "createdeco:brass_hull",
		"createdeco:brass_bars_overlay",
		"createdeco:brass_bars",
		"createdeco:brass_catwalk",
		"createdeco:brass_catwalk_railing",
		"createdeco:brass_support_wedge",
		'createdeco:brass_mesh_fence',
		"createdeco:brass_sheet_metal",
		"createdeco:white_placard",
		"createdeco:orange_placard",
		"createdeco:magenta_placard",
		"createdeco:light_blue_placard",
		"createdeco:yellow_placard",
		"createdeco:lime_placard",
		"createdeco:pink_placard",
		"createdeco:gray_placard",
		"createdeco:light_gray_placard",
		"createdeco:cyan_placard",
		"createdeco:purple_placard",
		"createdeco:blue_placard",
		"createdeco:brown_placard",
		"createdeco:green_placard",
		"createdeco:red_placard",
		"createdeco:black_placard"
      ],
    },
    "create:brass_sheet",
    '#forge:plates/brass'
  ),
  //Recipes that use Copper sheets
  create_deco.replaceInput(
    {
      output: [
        "createdeco:copper_hull",
		"createdeco:copper_bars_overlay",
		"createdeco:copper_bars",
		"createdeco:copper_catwalk",
		"createdeco:copper_catwalk_railing",
		"createdeco:copper_support_wedge",
		'createdeco:copper_mesh_fence',
		"createdeco:copper_sheet_metal"
      ],
    },
    "create:copper_sheet",
    '#forge:plates/copper'
  ),
  //Recipes that use brass blocks
  create_deco.replaceInput(
    {
      output: [
        "createdeco:brass_hull"
      ],
    },
    "create:brass_block",
    '#forge:storage_blocks/brass'
  ),
  //Recipes that use Iron sheets
  create_deco.replaceInput(
    {
      output: [
        "createdeco:iron_hull",
		"createdeco:iron_bars_overlay",
		"createdeco:iron_bars",
		"createdeco:iron_catwalk",
		"createdeco:iron_catwalk_railing",
		"createdeco:iron_support_wedge",
		'createdeco:iron_mesh_fence',
		"createdeco:iron_sheet_metal",
		"createdeco:white_shipping_container",
		"createdeco:orange_shipping_container",
		"createdeco:orange_shipping_container",
		"createdeco:magenta_shipping_container",
		"createdeco:light_blue_shipping_container",
		"createdeco:yellow_shipping_container",
		"createdeco:lime_shipping_container",
		"createdeco:pink_shipping_container",
		"createdeco:gray_shipping_container",
		"createdeco:light_gray_shipping_container",
		"createdeco:cyan_shipping_container",
		"createdeco:purple_shipping_container",
		"createdeco:blue_shipping_container",
		"createdeco:brown_shipping_container",
		"createdeco:green_shipping_container",
		"createdeco:red_shipping_container",
		"createdeco:black_shipping_container",
		],
    },
    "create:iron_sheet",
    '#forge:plates/iron'
  ),
  //Copper Lamps
  create_deco.replaceInput(
    {
      output: [
        "createdeco:yellow_copper_lamp",
		"createdeco:red_copper_lamp",
		"createdeco:blue_copper_lamp",
		"createdeco:green_copper_lamp"
      ],
    },
    "create:copper_sheet",
    '#forge:plates/copper'
  ),
  
  create_deco.replaceInput(
    {
      output: [
        "createdeco:yellow_copper_lamp",
		"createdeco:red_copper_lamp",
		"createdeco:blue_copper_lamp",
		"createdeco:green_copper_lamp"
      ],
    },
    "#forge:nuggets/copper",
    '#forge:nuggets/copper'
  ),
  //Iron Lamps
  create_deco.replaceInput(
    {
      output: [
        "createdeco:yellow_iron_lamp",
		"createdeco:red_iron_lamp",
		"createdeco:blue_iron_lamp",
		"createdeco:green_iron_lamp"
      ],
    },
    "create:iron_sheet",
    '#forge:plates/iron'
  ),
  //Brass Lamps
  create_deco.replaceInput(
    {
      output: [
        "createdeco:yellow_brass_lamp",
		"createdeco:red_brass_lamp",
		"createdeco:blue_brass_lamp",
		"createdeco:green_brass_lamp"
      ],
    },
    "create:brass_sheet",
    '#forge:plates/brass'
  ),
  
  create_deco.replaceInput(
    {
      output: [
        "createdeco:yellow_brass_lamp",
		"createdeco:red_brass_lamp",
		"createdeco:blue_brass_lamp",
		"createdeco:green_brass_lamp"
      ],
    },
    "#forge:nuggets/brass",
    '#forge:nuggets/brass'
  ),
  //Coins
  create_deco.recipes.create.pressing(['createdeco:brass_coin'],["#forge:nuggets/brass"]);
  create_deco.recipes.create.pressing(['createdeco:copper_coin'],["#forge:nuggets/copper"]);
  //Decals
  decals.forEach((decal) => create_deco.remove(decal));
  decals.forEach((decal) => create_deco.stonecutting(decal,'#forge:plates/iron'));
  
})
