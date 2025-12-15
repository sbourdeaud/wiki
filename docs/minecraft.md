---
icon: material/minecraft
pdf: true
---
# Minecraft

## Connecting to a multiplayer server

1. Launch the game with the correct minecraft version
2. Select *Multiplayer* > *Add Server*
3. Type in `<server_address>:<server_port>` where *server_address:server_port* has been provided to you and click *Add*
4. Double click on the newly added server to connect

## Using shaders

!!! warning

    This assumes you have already installed the Minecraft Java Edition launcher from the XBox App.

1. Open a command prompt by pressing ++win+r++ typing `cmd` and pressing ++enter++
2. Install a Java runtime environment on your machine: 
    ```bash
    winget install -e --id Oracle.JavaRuntimeEnvironment
    ```
2. Download the **Iris Shaders** installer from [here](https://www.irisshaders.dev/download)
3. Double click the downloaded `.jar` file
4. Start the *Minecraft Launcher App* and you should see an *Iris & Soidum* client selected by default. Click *Play*
5. Once in the game, select *Options* > *Video Settings* > *Shader Packs* > *Open Shader Pack Folder*
6. Download shader packs from [here](https://modrinth.com/discover/shaders?v=1.21.11&g=categories:iris&page=2)
7. Move the downloaded shader pack into the shader packs folder and select it in game

!!! tips

    Recommended shader pack is [Complementary Shaders](https://modrinth.com/shader/complementary-reimagined)

## Using Resource Packs

1. Launch the game
2. Select *Options* > *Resource Packs* > *Open Pack Folder*
3. Download a resource pack from [here](https://www.curseforge.com/minecraft/search?class=texture-packs)
4. Copy the downloaded resource pack into the pack folder
5. Select it in game

!!! tips

    Recommended resource pack is [Barebone](https://www.curseforge.com/minecraft/texture-packs/bb/download/7051223)

## Using Mod Packs

!!! info

    Mod Packs are collections of mods which are client side modifications that are aimed at enhancing the game.  Not all Mod Packs are compatible with multiplayer servers.

1. Download and install [Modrinth](https://modrinth.com/app)
2. Launch the *Modrinth* app, click on the right *Playing as* and click on the green icon with a square and arrow to authenticate
3. Once authenticated, click on the *Discover Content* icon in the left toolbar (the icon that looks like a compass), then search for the Mod Pack you want to install (exp: Chocolate) and install it
4. If you need to disable some mods in order for the pack to work with a multiplayer server, click on the Mod Pack icon in the left toolbar, then search for the mod you want to disable in the *Search projects* box, then uncheck the mod you want to disable
5. You will usually want to ioncrease the java memory allocation by clicking the gear icon for the Mod Pack next to *Play*, going into "Java and Memory" and checking *Custom memory allocation* and increasing it to something like 8192 (depending on the amount of memory your computer has available)

!!! warning

    Mod Packs have their own Resource Pack and Shaders Pack folders, so you will probably not find previously installed Resource Packs and Shader Packs and will need to copy them again in the Mod Pack specific folders.