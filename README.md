<div align="center">

<a href="https://deusespr.github.io/Sloth-Mod/"><img src="docs/img/readme/banner.png" alt="Sloth-Mod: make Minecraft mods by describing them. A pixel sloth, the title, and a hotbar of items drawn by the app's art engine." width="100%"></a>

<h3>Describe a Minecraft mod in plain English. Sloth-Mod plans it, writes it, builds it and gets it ready to play — then lets you sculpt, paint and wire it by hand.</h3>

Free for Windows · works with any AI, cloud or local · no coding required, full Studio & Code mode included

<a href="https://github.com/DeusesPR/Sloth-Mod/releases/latest"><img src="docs/img/readme/btn-download.png" alt="Download for Windows" width="300"></a>

[![Release](https://img.shields.io/github/v/release/DeusesPR/Sloth-Mod?label=release&color=2e7d22)](https://github.com/DeusesPR/Sloth-Mod/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/DeusesPR/Sloth-Mod/total?color=2e7d22)](https://github.com/DeusesPR/Sloth-Mod/releases)
[![Free to use](https://img.shields.io/badge/price-free-2e7d22)](LICENSE)

[Website](https://deusespr.github.io/Sloth-Mod/) · [New in 2.0](#new-in-20) · [Showcase](#showcase) · [First mod in 3 steps](#your-first-mod-in-3-steps) · [Versions and AIs](#what-it-works-with) · [Install](#install) · [Help](#help-and-feedback) · [Support](#support-sloth-mod)

<br>

<img src="docs/img/v14/sloth-mod-1.4-trailer.gif" alt="Sloth-Mod showcase trailer: picking a wing style for a creature that rebuilds live in Studio, painting both wings of the 3D model with a mirrored brush, wiring an If / Else rule node by node, clicking a 3x3 crafting recipe together, the mod's own Java code, and dragons flying in Minecraft 26.3." width="100%">

</div>

## What it does

- **Builds mods, custom realms, RPG campaigns and playable survival overhauls — from a sentence or at zero AI cost.** Describe items, blocks, creatures, bosses, dimensions, dungeons, combat systems or a themed world for the AI to plan and build, run or mix any of the eight **Instant Overhaul Worlds** from fresh spawn to boss victory with zero AI calls, or use **Build Manually** / **Add Content** and **Duplicate** offline with no API key.
- **Sculpts 3D props & weapons and animates creatures on a keyframe timeline.** Click boxes in **3D Sculpt** to drag RGB move/resize handles (`1 px` or `1/4 px` snap), add, mirror or rotate cuboids (`±22.5°` / `±45°`) and repack UVs while preserving painted pixels, or scrub per-bone tracks (`0-200` ticks) in **Keyframes** with left/right limb mirroring and `.bbmodel` / `.animation.json` clip import.
- **Adds slash commands, advancement trees, game rules & villager professions (`$0` AI).** Build `/command` trees with typed arguments and instant actions, grow parent-to-child **Advancement** trees visually in Studio, register boolean or integer `/gamerule` toggles wired to Blueprints, and design custom **Villager Professions** with job-site workstations, apron/hat outfits and 5-level trade tables across all six supported targets.
- **Previews biomes, portals, dungeons & dimensions as live 3D block dioramas.** Spin and zoom terraced biome hillsides with trees, ponds and flowers, open-roof 3-room Jigsaw dungeon cutaways, standing `4x5` portal frames and sky-island realms right inside **Studio** with 60 fps live sky, fog, water, grass, leaf and glow tinting.
- **Directs branching dialogue, camera cutscenes, quests & procedural music.** Give NPCs and villagers branching conversation trees with hub loops, flags, item gifts/trades, quests and faction reputation, stage smooth camera cutscenes with letterbox bars and title cards, wire multi-chapter quest storylines, and create seamless looping area and boss soundtracks right inside the app.
- **Reshapes vanilla rules, workstations & custom trees.** Disable chosen vanilla recipes, empty or override loot tables, remove mob spawns or worldgen ores, lock items behind progression gates, tune hearts and damage multipliers, add custom furnace-style kilns and processing stations with beveled vanilla-style GUIs, and grow sapling-to-canopy trees with plank, stair, slab, fence, fence gate, door, trapdoor, button and pressure plate wood sets.
- **Draws distinct pixel art and makes the sounds.** A built-in engine draws crisp 6-face block textures, 3D creature skins, animated portal swirls, distinct silhouettes across multi-tier tools/weapons/relics, procedural music loops and sound effects across 614 sound types. Pick your favourite version of each, then refine anything in the docked **Studio** without spending AI tokens.
- **Reopens `.jar` mods & exports Overlay Packs.** Click **Open `.jar` Mod** to reopen any `.jar` built by Sloth-Mod (`1.5.0+`) with its full project, custom art, Blueprints and code intact (with an opt-in per-mod switch if you also want to share your Big Project plan), or open another Fabric, NeoForge or Forge `.jar` to tweak its textures, sounds and recipes and export a clean `.zip` Overlay Pack.
- **Hands-on 3D Studio, Visual Blueprints & Code mode.** Paint pixels directly onto single-skin 3D models with smart material brushes and live 2D UV sync, edit textured block faces as 2D pixels, grab and scale creature parts, edit 3x3 crafting grids with real Minecraft icons, wire game logic as visual Blueprint node graphs (or plain sentences), or open full **Code** mode with Java syntax highlighting.
- **Lets you test before anything is kept.** One button starts Minecraft with your mod, an automatic in-game check tries your new content on `Fabric 26.3` and `NeoForge 26.3`, and **Sync to Game (`F3+T`)** pushes live art tweaks into a running test session. Keep it, ask for a fix or undo it.
- **Manages your mods too.** Browse Modrinth, install mods, modpacks, resource packs and shaders, and keep game profiles for Fabric, Quilt, Forge, NeoForge and vanilla.

## New in 2.0

<table>
  <tr>
    <td width="50%" valign="top"><img src="docs/img/v20/studio-sculpt-weapon.png" width="100%" alt="Docked Studio 3D Sculpt tab on Relic Blade showing RGB move/resize gizmo arrows on the 3D crossguard, Snap 1 px, + Add Box, Mirror X, material & angle selectors, and Undo/Redo."><br><sub><b>In-App 3D Sculptor &amp; <code>$0</code> 3D Starters.</b> Click and drag RGB handles (<code>1 px</code> or <code>1/4 px</code> snap) to sculpt shaped blocks, furniture, items and 3D weapons box-by-box with <code>±22.5°</code>/<code>±45°</code> angles, hitbox overlays and UV-preserving paint handoff.</sub></td>
    <td width="50%" valign="top"><img src="docs/img/v20/studio-keyframes-timeline.png" width="100%" alt="Docked Studio Keyframes tab on Ember Guardian showing per-bone tracks, draggable diamond keyframes, custom spawn action, Left-to-Right bone mirroring, rotation/position/scale sliders and Smooth easing."><br><sub><b>Keyframe Animation Timeline &amp; Clip Import.</b> Scrub <code>0-200</code> ticks across per-bone tracks, add custom actions like <code>spawn</code>, mirror left/right limbs, import <code>.bbmodel</code> / <code>.animation.json</code> clips, and run keyframe-animated creatures on <code>NeoForge 26.3</code> too.</sub></td>
  </tr>
  <tr>
    <td width="50%" valign="top"><img src="docs/img/v20/studio-advancement-tree.png" width="100%" alt="Docked Studio Advancement editor showing First Discovery and child First Discovery Milestone in a visual tree with Add Child Advancement, inventory/kill/biome/dimension triggers and XP/recipe rewards."><br><sub><b>Advancement Trees &amp; Slash Commands (<code>$0</code> AI).</b> Grow parent-to-child advancement trees right inside Studio and build <code>/command</code> trees with typed player, coordinates, number, word or text arguments across all 6 targets.</sub></td>
    <td width="50%" valign="top"><img src="docs/img/v20/studio-villager-profession.png" width="100%" alt="Docked Studio Villager Profession editor on Trail Outfitter showing custom villager apron & hat outfit preview, job-site workstation picker and 5-level trade editor."><br><sub><b>Villager Professions &amp; Custom Game Rules (<code>$0</code> AI).</b> Create custom villager professions with job-site blocks, outfit colours and 5-level trade tables, plus boolean or bounded integer <code>/gamerule</code> toggles wired to Blueprints.</sub></td>
  </tr>
</table>

- **In-App 3D Sculptor & `$0` 3D Prop / Weapon Starters.** Open **3D Sculpt** in **Studio** on any shaped block, piece of furniture, item, tool or ability weapon to click boxes in 3D, drag RGB arrows to move or resize (`1 px` or `1/4 px` snap), nudge with arrow keys, **+ Add Box**, **Duplicate**, **Mirror X**, **Delete**, **Undo / Redo**, rotate cuboids (`-45°`, `-22.5°`, `0°`, `22.5°`, `45°`), pick materials and tints (or **Main / Accent** block textures with a North arrow and hitbox wireframe overlay), and switch back to **3D Paint & Grab** with automatic non-overlapping UV repacking that preserves your painted texels. **Build Manually** adds five `$0` 3D starters: **Display Altar**, **Crystal Cluster**, **Lit Brazier**, **Guardian Trophy** and **3D Relic Blade**.
- **Keyframe Animation Timeline & `.bbmodel` / `.animation.json` Import.** Open **Keyframes** in **Studio** on animated creatures to scrub `0-200` ticks, play/pause or step frame-by-frame, edit `idle`, `walk`, `run`, `swim`, `fly`, `attack` and `death` clips or add custom actions such as `spawn`, drag diamond keyframes along bone tracks, tune rotation, position, scale and easing (**Linear**, **Smooth**, **Step**), mirror left/right limb keyframes in one click, or import `.bbmodel` and `.animation.json` clips while keeping unedited library creatures unchanged. Keyframe-animated creatures build on all six supported targets, and the optional GeckoLib animation engine now also runs on **NeoForge `26.3`** alongside **Fabric `26.3`**.
- **Slash Commands, Advancement Trees, Game Rules & Villager Professions (`$0` AI).** Pick **Custom Slash Command**, **Advancement & Milestone**, **Custom Game Rule** or **Villager Profession** in **Build Manually** across all six supported targets with zero AI calls: wire `/command` trees with typed arguments, permission levels and instant message, item, spawn, potion-effect, sound, heal, feed, teleport or Blueprint-signal actions; grow parent-to-child **Advancement** trees in Studio (**Add Child Advancement**) with join, item pickup, consume, mob defeat, biome/dimension visit or Blueprint-granted triggers and XP or recipe rewards; register boolean or bounded integer `/gamerule` toggles wired to Blueprints; and create **Villager Professions** with a job-site workstation, custom apron/hat trim outfit and 5-level trade tables.
- **In-Game Mod Check on NeoForge `26.3` & Studio Polish.** The automatic in-game mod check now runs on **NeoForge `26.3`** as well as **Fabric `26.3`**, Studio **Duplicate** copies custom creature keyframe files onto cloned creatures, deleting a Villager Profession cleans up its shared job-site tag entry, and opening **3D Sculpt** or **Keyframes** without making an edit leaves existing mods byte-for-byte untouched.
- **Still being polished.** All six supported targets build `.jar` files; dedicated-server checks pass for commands, advancements, game rules and villager professions on `26.3`, sculpted 3D props/weapons (`Fabric 26.3`) and animated creatures (`NeoForge 26.3`) have been verified in real client sessions, and the automatic in-game mod check runs on `Fabric 26.3` and `NeoForge 26.3`, while full unassisted start-to-finish Survival playthroughs across every loader and multiplayer are still being polished. Use **Report a problem** inside the app if something acts up.

### Also in 1.9, 1.8, 1.7, 1.6, 1.5 & 1.4

<table>
  <tr>
    <td width="50%" valign="top"><img src="docs/img/v19/biome-voxel-studio.png" width="100%" alt="Docked Studio showing Crystal Glade biome with a live 3D terraced voxel hillside diorama with cherry-blossom trees, pond, grass and flowers alongside live colour pickers and Biome Mood presets."><br><sub><b>Playable Survival Finale, Customizer &amp; 3D Block Dioramas (<code>1.8</code>–<code>1.9</code>).</b> Spin 3D biome, portal, dungeon &amp; dimension dioramas, mix 8 Overhaul Worlds at <code>$0</code> AI cost, and play realms with explorer maps &amp; boss trophies.</sub></td>
    <td width="50%" valign="top"><img src="docs/img/v17/dialogue-graph.png" width="100%" alt="Docked Studio showing the Dialogue graph visual editor on Village Gossip with a START node, reachability check banner, and dashed hub-loop edges."><br><sub><b>Branching Dialogue, Cutscenes &amp; Music (<code>1.7</code>).</b> Wire 48-node NPC &amp; villager conversations, smooth camera cutscenes, 8-style seamless looping music, quests &amp; storylines at <code>$0</code> AI cost.</sub></td>
  </tr>
  <tr>
    <td width="50%" valign="top"><img src="docs/img/v16/world-rules-creator.png" width="100%" alt="Manual Content Creator showing World Rules & Vanilla Overrides alongside Workstation / Processing Machine and Custom Tree & Wood Set presets."><br><sub><b>World Rules, Workstations &amp; Custom Trees (<code>1.6</code>).</b> Reshape vanilla recipes, progression gates, loot &amp; spawns, add beveled furnace-style kilns, and grow custom trees with plank wood sets.</sub></td>
    <td width="50%" valign="top"><img src="docs/img/v15/docked-studio-materials.png" width="100%" alt="Docked 3D Studio with collapsible sidebar rail showing an Ember Drake painted with Crystal and Rune Glow smart material brushes alongside its 2D UV sheet."><br><sub><b>Docked 3D Studio, <code>.jar</code> Opener, Blueprints &amp; Code Mode (<code>1.4</code>–<code>1.5</code>).</b> Paint on 3D models, reopen Sloth-Mod <code>.jar</code> mods, export <code>.zip</code> Overlay Packs, wire Blueprint graphs, or code in Java.</sub></td>
  </tr>
</table>

- **Playable survival finale, `$0` Overhaul Customizer, 3D block dioramas & 72 item silhouettes (`1.9`).** Spin 3D biome, portal, dungeon and dimension dioramas with live 60 fps tinting, inspect 6-face textured 3D blocks, mix kits across all 8 Overhaul Worlds, and play 9-step survival journeys with dungeon explorer maps and boss trophies.
- **Custom biomes, multi-biome dimensions, portals & branching Jigsaw dungeons (`1.8`).** Design custom biomes, combine 1–8 biomes across continent, sky-island, cavern or void dimensions, connect worlds with standing `4x5` portal frames + keys or gateway pads, and generate `1-5` room crypt, bastion, crystal vault, sunken ruin or sky citadel dungeons across all 6 targets.
- **Branching dialogue, camera cutscenes, procedural area music & Campaign Studio (`1.7`).** Give NPCs and villagers branching conversations with hub loops, flags and trades, stage smooth camera cutscenes, compose 8-style seamless music loops, and edit quests, storylines and factions visually in Studio.
- **World rules, custom kilns, plank wood-set trees, `.jar` round-trip, Overlay Packs & action combat (`1.4`–`1.6`).** Disable vanilla recipes/ores/spawns, build custom workstations and sapling-to-canopy trees, reopen Sloth-Mod `.jar` projects, export `.zip` Overlay Packs, sync live art via `F3+T`, and build dodge rolls, timed parries, radial spell wheels, passive skill trees and multi-move bosses.

## Showcase

Everything here was drawn by Sloth-Mod's own art engine, the one that makes the art in your mods. No image generator, no Minecraft art, nothing touched up by hand. You can turn each one yourself, and hear the sound maker, on the [website](https://deusespr.github.io/Sloth-Mod/#showcase).

<p align="center">
<img src="docs/media/showcase-hero.webp" width="100%" alt="Five things turning in 3D: a ruby sword, a rifle, a ruby ore block, an orange fox and a honey cookie.">
</p>

<table>
  <tr>
    <td width="50%" align="center"><img src="docs/media/showcase-tools.webp" width="100%" alt="An emerald pickaxe, a golden axe and a bow turning in 3D."><br><sub><b>Tools and weapons</b></sub></td>
    <td width="50%" align="center"><img src="docs/media/showcase-guns.webp" width="100%" alt="A pistol, a shotgun and a sniper rifle turning in 3D."><br><sub><b>Guns</b></sub></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><img src="docs/media/showcase-blocks.webp" width="100%" alt="A log, a crystal block and a grass block turning in 3D."><br><sub><b>Blocks</b></sub></td>
  </tr>
</table>

<p align="center">
<img src="docs/img/showcase/sheet-items.png" width="100%" alt="A sheet of pixel-art items: swords, tools, gems, food, armor, keys, books and firearm shapes."><br>
<sub><b>Every item shape the engine knows.</b> You choose the material and the colors.</sub>
</p>

<p align="center">
<img src="docs/img/showcase/sheet-blocks.png" width="100%" alt="A sheet of 40 unique block textures drawn by the engine: stone, wood, log rings, metals, crystal, wool, brick, ore, lava, water, grass and more."><br>
<sub><b>Every block material the engine knows</b> (with separate tops for logs, bone and grass). They tile without seams.</sub>
</p>

### Creatures and bosses in Minecraft

<p align="center">
<img src="docs/img/v13/dragons.webp" width="100%" alt="Five dragons in a row in Minecraft: white, purple-black, small green, golden and red."><br>
<sub><b>Five dragons.</b> On the <a href="https://deusespr.github.io/Sloth-Mod/#creatures">website</a> you can look at dragons and a fairy from four sides.</sub>
</p>

<table>
  <tr>
    <td width="50%" align="center"><img src="docs/img/v13/fairy.webp" width="100%" alt="A small fairy with large stained-glass butterfly wings in Minecraft."><br><sub><b>A fairy with butterfly wings</b></sub></td>
    <td width="50%" align="center"><img src="docs/img/v13/drake.webp" width="75%" alt="A red dragon with glowing wing edges standing in Minecraft."><br><sub><b>A dragon with membrane wings</b></sub></td>
  </tr>
  <tr>
    <td width="50%" align="center"><img src="docs/img/v13/wings.webp" width="100%" alt="A green drake with leathery wings, a winged wolf and a winged stag with feathered wings, seen from several sides."><br><sub><b>Leathery and feathered wings</b></sub></td>
    <td width="50%" align="center"><img src="docs/img/v14/boss-and-creatures-ingame.png" width="100%" alt="Real Minecraft 26.3 screenshots showing an Iron Colossus boss with multi-part hitboxes, a Frost Archer and a Stone Sentinel."><br><sub><b>Multi-part bosses, archers and sentinels in 26.3</b></sub></td>
  </tr>
</table>

## Your first mod in 3 steps

1. **Describe it.** Click **Create New Mod**, pick a Minecraft version and type what you want, for example "a ruby sword that sets mobs on fire". Sloth-Mod asks a few clickable questions and shows a plan.
2. **Pick and customize the art.** Choose from several versions of each texture, 3D model and sound — or jump into **Studio** and **Blueprints** to paint in 3D, tweak parts, edit crafting recipes and wire rules by hand.
3. **Test it in Minecraft.** One button starts the game with your mod. Then answer "Did it work?": keep it, say what is wrong so the AI fixes it, or undo.

<table>
  <tr>
    <td width="50%" valign="top"><img src="docs/img/app-plan.png" width="100%" alt="The AI panel showing a plan for the ruby sword with a Looks good, build it button."><br><sub><b>A plan you approve.</b> Nothing is built before you say so.</sub></td>
    <td width="50%" valign="top"><img src="docs/img/app-art.png" width="100%" alt="The art picker with three versions of a ruby sword texture: classic, cute and detailed."><br><sub><b>Pick your favourite.</b> The others are kept for later.</sub></td>
  </tr>
  <tr>
    <td width="50%" valign="top"><img src="docs/img/app-test.png" width="100%" alt="The Ready for you to test card with a large Test it in Minecraft button and Undo and Keep changes buttons."><br><sub><b>Ready for you to test.</b> Your mod is saved only when you keep it.</sub></td>
    <td width="50%" valign="top"><img src="docs/img/app-guide.png" width="100%" alt="The how-to-play guide for the ruby sword with a crafting grid drawn like the game."><br><sub><b>A player guide</b> with crafting panels drawn like the game.</sub></td>
  </tr>
  <tr>
    <td width="50%" valign="top"><img src="docs/img/app-discover.png" width="100%" alt="The Discover tab listing Modrinth mods with Install buttons, filtered to a game profile."><br><sub><b>Discover.</b> Mods, modpacks and shaders from Modrinth.</sub></td>
    <td width="50%" valign="top"><img src="docs/img/app-mymods.png" width="100%" alt="The My Mods tab with a game profile, its installed mods with on/off switches and a Play button."><br><sub><b>My Mods.</b> Game profiles, on/off switches, updates and Play.</sub></td>
  </tr>
</table>

## What it works with

**Minecraft versions** it builds new mods for:

| Minecraft | Fabric | NeoForge | Forge |
|:---|:---:|:---:|:---:|
| 26.3 | ✓ | ✓ | |
| 1.21.1 | ✓ | ✓ | |
| 1.20.1 | ✓ | | ✓ |

Where new things land:

| | Versions | What to expect |
|:---|:---|:---|
| **New things first** | Fabric 26.3 | Everything new is built and proven here first |
| **Supported** | NeoForge 26.3 · NeoForge 1.21.1 · Forge 1.20.1 · Fabric 1.21.1 · Fabric 1.20.1 | Works and gets fixes; new things arrive in batches |
| **Legacy projects** | Fabric and NeoForge 26.1, 26.2 | Existing mods still open and move to 26.3 in one click |

Small updates arrive often; the app offers them by itself, and your mods, settings and keys stay as they are.

The right Java and Gradle are downloaded by the app. It never touches the Java on your PC. The mod manager also handles Quilt and vanilla profiles.

**AI providers.** Use the one you like:

| Kind | Providers |
|:---|:---|
| **Cloud** | Claude, OpenAI, Gemini, Grok, DeepSeek, Qwen, OpenRouter, Mistral, Groq, Kimi, GLM, MiniMax, Together, Fireworks, Cerebras, NVIDIA NIM, Hugging Face |
| **Local** | LM Studio, Ollama or any OpenAI-compatible server |

Your AI provider may charge you; Gemini and Mistral have free tiers, OpenRouter has free models, and a local AI costs nothing. Every provider has a **Get an API key** button with a note on cost, **Test this AI** checks that it can really drive the app, and you can set a spending limit.

## Install

1. Download [`Sloth-Mod_2.0.0_x64-setup.exe`](https://github.com/DeusesPR/Sloth-Mod/releases/download/v2.0.0/Sloth-Mod_2.0.0_x64-setup.exe) (or pick a version on the [releases page](https://github.com/DeusesPR/Sloth-Mod/releases)) and run it. It installs for your user only, with no admin prompt.
2. **Why Windows shows a warning.** Sloth-Mod is free and not paid-signed, so Windows SmartScreen may show a blue "Windows protected your PC" box. That is normal for a free app. Click **More info**, then **Run anyway**. Only do this for an installer from this repository's Releases page. More in [PRIVACY.md](PRIVACY.md) and [SECURITY.md](SECURITY.md).

You need Windows 10 or 11 (64-bit), about 4 GB of free disk space, internet for the first setup, and Minecraft Java Edition to play what you make. The app updates itself and keeps your mods, settings and keys.

## Where Sloth-Mod is going

Not available today, and built step by step: schematic & multi-block structure building tools in Studio, deeper multiplayer & older-version parity, and making everything even easier on cheap and free AI. No dates, on purpose.

What stays: free, Windows, works with cheap or free AI (including AI on your own PC), a compatibility check against your modpack, and safety checks on AI-written code. If you use Sloth-Mod today, nothing breaks and updates keep coming through the app. Tell us what you want to make in the [Discussions](https://github.com/DeusesPR/Sloth-Mod/discussions), or use **Report a problem** in the app.

## Status

**What works in this version (2.0.0):** core mod recipes — including `2.0.0`'s **In-App 3D Sculptor**, **`$0` 3D Prop / Weapon Starters**, **Keyframe Animation Timeline**, **`.bbmodel` / `.animation.json` Import**, **Slash Commands**, **Advancement Trees**, **Custom Game Rules** and **Villager Professions**, `1.9.0`'s **Playable Survival Finale**, **`$0` Overhaul World Customizer**, **3D Block Dioramas**, **Textured 3D Block Previews** and **72 New Item Silhouettes**, `1.8.0`'s **Custom Biomes**, **Multi-Biome Custom Dimensions**, **Dimension Portals & Igniter Keys** and **Branching Multi-Room Dungeons**, `1.7.0`'s **Branching Dialogue Trees**, **Camera Cutscenes**, **Procedural Area & Boss Music** and **Campaign Studio Editors**, and `1.6.0`'s **World Rules**, **Workstations** and **Custom Trees** — compile with real Gradle across all 6 active Minecraft/loader targets (`Fabric 26.3`, `NeoForge 26.3`, `Fabric 1.21.1`, `NeoForge 1.21.1`, `Fabric 1.20.1`, `Forge 1.20.1`), pass dedicated server startup, worldgen, command/advancement/gamerule/villager-profession runtime, Z-axis portal survival and dungeon explorer-map loot checks, and are verified in live Minecraft client sessions (`Fabric 26.3` and `NeoForge 26.3`, including automatic in-game mod checks on both `26.3` loaders) alongside `1.5.0`'s **Open `.jar` Mod** restore and `.zip` Overlay Pack export; the docked Studio (`Looks and sounds`, `3D Sculpt`, `3D Paint & Grab`, `Keyframes`, `Edit 2D pixels` for textured blocks, `Motion`, `Parts`, `3x3 Crafting`, advancement trees, command/villager editors, 3D biome/portal/dungeon/dimension block dioramas, dialogue graphs, camera splines, music triggers and campaign editors), `Blueprints & Rules`, **Sync to Game (`F3+T`)**, `Code` mode, sound maker and `Share` showcase cards all work offline without spending AI tokens.

**Still being polished:** full unassisted start-to-finish Survival playthroughs of customized Overhaul Worlds and some of the newest sculpted props, keyframe animations, commands, advancements, villager professions, realm, dungeon, portal, campaign, cutscene, dialogue, action-combat, spell-wheel, skill-tree and multi-move boss options have not been played across large multiplayer sessions yet, portals start from the Overworld, HUD-bar hiding and damage multipliers in **World Rules** are skipped on `Fabric 1.20.1` and `Fabric 1.21.1`, and third-party `.jar` tweaking intentionally edits textures, sounds, recipes and data rather than decompiling compiled Java classes. The safety check is a strong guardrail, not a guarantee: only play mods you trust. The installer is not paid-signed, so Windows SmartScreen may show a warning.

## More details

<details>
<summary><b>Everything it can do</b></summary>

<br>

- **Describe, plan, build, test — or create manually.** Ask the AI to plan and build from plain English, or click **Build Manually** / **Add Content** and **Duplicate** to add and clone items, 3D props/weapons, blocks, creatures, commands, advancements, game rules, villager professions, biomes, dimensions, portals, dungeons, dialogues, quests, factions, settlements, cutscenes and area music offline at zero AI cost.
- **In-app 3D Sculptor & Keyframe Animation Timeline.** Click and drag RGB handles (`1 px` or `1/4 px` snap) in **3D Sculpt** to build and resize shaped blocks, furniture, items and 3D weapons box-by-box (`±22.5°`/`±45°` rotations, hitbox overlays and UV-preserving 3D paint handoff), or scrub `0-200` ticks across bone tracks in **Keyframes** with left/right limb mirroring, custom actions (`spawn`) and `.bbmodel` / `.animation.json` clip import.
- **Slash commands, advancement trees, game rules & villager professions.** Wire `/command` trees with typed arguments and instant actions, grow parent-to-child **Advancement** trees visually in Studio, register boolean or bounded integer `/gamerule` toggles wired to Blueprints, and create custom **Villager Professions** with job-site workstations, apron/hat trim outfits and 5-level trade tables across all 6 targets.
- **Custom biomes, multi-biome dimensions, portals & branching dungeons with 3D block dioramas.** Design custom sky, fog, water, grass and leaf colours on a live 3D block diorama, combine 1–8 biomes across continent, sky-island, cavern or void dimensions, connect worlds with standing `4x5` portal frames + keys or gateway pads, and generate `1-5` room crypt, bastion, crystal vault, sunken ruin or sky citadel dungeons with explorer maps.
- **Branching dialogue, camera cutscenes, quests & procedural music.** Wire NPC and villager conversations with up to 48 nodes, hub loops, flags, item gifts/trades, quests and reputation, stage smooth curved or straight camera cutscenes with letterbox bars and title cards, arrange multi-chapter quest storylines, and create click-free looping area & boss tracks across 8 styles.
- **Reopen `.jar` mods & export Overlay Packs.** Click **Open `.jar` Mod** to restore any `.jar` built by Sloth-Mod (`1.5.0+`) into its full project, or open another Fabric, NeoForge or Forge `.jar` to customize textures, sounds and recipes and export a clean `.zip` Overlay Pack.
- **Art picker & docked 3D Studio.** Several different designs of every texture, 3D model and creature, plus 72 extra pixel-art silhouettes so multi-tier tools and weapons stay visually distinct. Open **Studio** right inside the workspace to sculpt 3D boxes, paint pixels directly onto single-skin 3D models with smart **Scales**, **Crystal**, **Metal**, **Fur** and **Rune Glow** brushes synced to the 2D UV sheet, inspect 6-face textured 3D blocks and edit their 2D faces, grab and scale parts, edit keyframe animations, or edit 3x3 crafting recipes with real Minecraft icons.
- **Visual Blueprints & Plain Sentences.** View and wire every mod rule as a colour-coded Blueprint node graph with `If / Else`, `Repeat`, `For Each`, `Random Pick`, `Chance Roll` and `Wait (Delay)` nodes, spawn nodes quickly by double-clicking empty grid space or dragging a pin, flip to plain-English sentences anytime, or ask AI to wire a rule.
- **Code mode.** Open any mod or existing Fabric, NeoForge or Forge Gradle folder in **Code** mode with dark-theme Java, JSON and Gradle syntax colouring, file search, one-click JAR builds and side-by-side file AI help.
- **Sound & music maker.** 614 kinds of sound (creatures, weapons, magic, materials, machines, interface, ambience, music) plus 8 seamless area & boss music loop styles, made in the app, checked for clicks and clipping, and added as real mod sounds.
- **How-to-play guides.** Every mod gets a player guide with a numbered **Your Journey** walkthrough (for survival realms), crafting and smelting panels, drop and spawn info, ready-to-paste commands and a mod icon.
- **Action combat, magic & bosses.** Dodge rolls, timed parries, radial spell wheels with three loadouts, 3D hand-held staffs, passive skill-tree windows, multi-move bosses with breakable parts, watched stalkers, ranged mobs and custom ore veins.
- **Update to a new Minecraft version.** One run moves your mod to a newer version of the same loader (or Forge to NeoForge) and keeps your art, sounds and hand edits.
- **Big project mode, 8 Playable Overhaul Worlds & `$0` Customizer.** An approved design, a 20 to 50 step roadmap and a project map built one tested step at a time — or pick or mix any of the eight built-in **Instant Overhaul Worlds** (`$0` AI) with the **Overhaul World Customizer** to build a start-to-finish survival conversion with zero AI calls.
- **World rules, custom workstations & plank wood-set trees.** Disable vanilla recipes, empty or override loot tables, remove mob spawns or worldgen features, lock items behind progression gates, add furnace-style kilns and processing stations with beveled GUI windows, and grow sapling-to-canopy custom trees with plank wood families.
- **Add-ons.** Make a mod that builds on another mod from Modrinth.
- **Spending limit.** Per-mod and daily limits with an optional PIN, and a cost readout for every run.
- **Mod manager.** Modrinth search and installs, game profiles, updates, `.mrpack` export, and Play through the official launcher.
- **Modpack compatibility check.** A throwaway server tells you whether your new mod works with the pack's mods.
- **Crash explainer, version history, share and publish** (export a `.jar` with a readme, save a `1200x630` showcase banner card, copy a Discord/Markdown post, or publish a draft to Modrinth).

</details>

<details>
<summary><b>Safety and privacy</b></summary>

<br>

- **A guard reads mod code, metadata and build files.** Before every build, code as well as mod metadata and resource files are scanned for things a mod should never do, like launching programs, opening web connections, running hidden commands during a build or touching files outside the game folders. The build files are locked while a mod is made, and a blocked build tells you why.
- **Nothing is kept until you say so.** The AI works on a copy of your mod. You test it, then keep or undo. Older versions stay in History.
- **No accounts, no tracking.** No sign-up, no telemetry, no analytics. Built `.jar` files include a small project bundle (your mod's own source, textures, sounds and Blueprints, with no API keys, chat history or PC folder paths; your Big Project plan stays out unless you switch it on for that mod) so you or anyone you share the `.jar` with can reopen it in Sloth-Mod, plus an optional "Made with Sloth-Mod" credit line you can switch off in Settings. Your requests and mod files go only to the AI provider you choose, or nowhere with a local AI. Downloads contact Modrinth, Mojang and the loader sites, and the update check contacts GitHub. If "Let the AI look things up online" is on (the default), the AI may read a short summary from Wikipedia or the Minecraft wiki while planning. The full list is in [PRIVACY.md](PRIVACY.md).
- **Keys stay on your PC.** API keys live in Windows Credential Manager, never in files or logs. Sloth-Mod never sees your Microsoft login; the official launcher handles it.
- **Honest limits.** Mods are programs and the guard is a safety net, not a guarantee. Code that passes the guard still runs with your Windows rights. Only play mods you trust. How to report a security problem: [SECURITY.md](SECURITY.md). Terms in plain words: [DISCLAIMER.md](DISCLAIMER.md).

</details>

<details>
<summary><b>Questions and answers</b></summary>

<br>

**Is it free?** Yes. Free to download and use, and the mods you make are yours ([terms](LICENSE)). Your AI provider may charge; free tiers, OpenRouter's free models and local AIs exist.

**Do I need to code?** No. You describe what you want (or use **Build Manually** / **Add Content**), click through a few choices, and customize looks, parts, crafting and Blueprints visually. If you do like code, **Code** mode and Workshop view give you a syntax-coloured Java editor, diffs and one-click Gradle builds.

**Which AI should I use?** Any listed provider. Bigger models make bigger mods with fewer repairs. **Test this AI** in Settings checks yours.

**Is the Windows warning normal?** Yes. Sloth-Mod is free and not paid-signed, so Windows warns about it like any new app. Make sure you downloaded it from this repository's [Releases page](https://github.com/DeusesPR/Sloth-Mod/releases/latest).

**Mac or Linux?** The installer is Windows only.

**Is this an official Minecraft product?** No. It is a fan-made tool, not approved by or associated with Mojang or Microsoft, and it contains no Minecraft assets.

Longer answers are on the [website](https://deusespr.github.io/Sloth-Mod/#faq).

</details>

<details>
<summary><b>What has been tested, and what has not</b></summary>

<br>

- Tested on a real Windows PC with real cloud and local AIs: AI-built mods from plain sentences were built with real Gradle, checked on dedicated servers (`Fabric 26.3` and `NeoForge 26.3`) and played in a real Minecraft client window (`Fabric 26.3`), alongside quick edits, Undo and Share; `2.0`'s **In-App 3D Sculptor**, **`$0` 3D Prop / Weapon Starters**, **Keyframe Animation Timeline**, **`.bbmodel` / `.animation.json` Import**, **Slash Commands**, **Advancement Trees**, **Custom Game Rules**, **Villager Professions** and **NeoForge `26.3` In-Game Check** (together with `1.9`'s **Playable Survival Finale**, **`$0` Overhaul World Customizer**, **3D Block Dioramas** & **72 new item silhouettes**, `1.8`'s **Custom Biomes**, **Multi-Biome Custom Dimensions**, **Dimension Portals & Igniter Keys** & **Branching Multi-Room Dungeons**, `1.7`'s **Branching Dialogue Trees**, **Camera Cutscenes** & **Procedural Area & Boss Music**, `1.6`'s **World Rules**, **Workstations** & **Custom Trees** and `1.5`'s **Open `.jar` Mod** & Overlay Pack `.zip` export) were built with real Gradle across all six active targets (`Fabric 26.3`, `NeoForge 26.3`, `Fabric 1.21.1`, `NeoForge 1.21.1`, `Fabric 1.20.1`, `Forge 1.20.1`), checked on dedicated servers (`26.3`, `1.21.1`, `1.20.1`) and verified in live `Fabric 26.3` and `NeoForge 26.3` client sessions.
- 1.4 through 2.0: in-app 3D sculpting, keyframe animation timelines, `.bbmodel` / `.animation.json` import, slash commands, advancement trees, custom game rules, villager professions, playable survival overhauls, `$0` world customizer, 3D biome/portal/dungeon/dimension block dioramas, 6-face textured 3D block previews, custom biomes, multi-biome dimensions, standing frame & pad portals, branching multi-room dungeons with explorer maps, branching NPC & villager dialogue, camera cutscenes, seamless procedural area & boss music, campaign & realm Studio editors, survival world rules, custom GUI workstations, full wood-set trees, `.jar` round-trip restore, Overlay Pack export, Manual Creator, Duplicate, docked 3D Studio, action combat, spell wheels, passive skill trees, multi-move bosses with breakable parts, watched stalkers, ranged mobs, ore veins, articulated dragon/bat/feathered wings and grounded serpents are verified in real builds and client/server checks, while full unassisted start-to-finish Survival playthroughs across every loader and multiplayer are still being fine-tuned in real play.
- "Sign in with Grok" is experimental and off by default (Settings → Experimental). It signs in with the identity of xAI's own Grok CLI, which may be against xAI's terms; xAI can block it or act on your account. You must accept a warning first, and an xAI API key is the supported way.
- The installer is not paid-signed.

</details>


## Help and feedback

- **Something broke?** Press **Report a problem** in the app; it fills in a GitHub issue with your log attached and your keys and Windows name hidden. Or open a [bug report](https://github.com/DeusesPR/Sloth-Mod/issues/new?template=bug_report.yml) by hand. Never paste API keys.
- **Ideas, questions and things you built:** [suggest an idea](https://github.com/DeusesPR/Sloth-Mod/issues/new?template=mod_idea.yml) (or press **Suggest an improvement** in the app) or join the [Discussions](https://github.com/DeusesPR/Sloth-Mod/discussions).
- **Want to help?** Reports and ideas are the best help right now; the [changelog](CHANGELOG.md) shows what changed.

## Support Sloth-Mod

Sloth-Mod is free. If it helps you, you can support it here: **[buymeacoffee.com/SlothMod](https://buymeacoffee.com/SlothMod)**

<img src="docs/img/support-qr.png" width="140" alt="QR code that opens the Sloth-Mod support page.">

## License and credits

Sloth-Mod is free to use; the terms are in [LICENSE](LICENSE) (versions up to 1.1.1 were released under the MIT license). The source code is not published from 1.1.2 on. Everything Sloth-Mod is built from is listed in [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md). The pixel fonts are Pixelify Sans and VT323 (SIL OFL 1.1), and the bundled sound library is CC0 sound effects by [Kenney](https://www.kenney.nl). All art in the app and on this page is original or made by the app's own art engine.

<sub>Sloth-Mod is not an official Minecraft product and is not approved by or associated with Mojang or Microsoft. Minecraft is a trademark of Mojang AB and Microsoft Corporation, used here only to name the game the mods are for. Sloth-Mod contains no Minecraft assets; pictures of vanilla items are read at run time from your own game files.</sub>
