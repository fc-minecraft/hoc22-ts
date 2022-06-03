// enums
enum Weight {
    CHICKEN = 10,
    COW = 11,
    SHEEP = 13
}


enum ColoredBlocks {
    //% blockIdentity="blocks.block" enumval=262380 block="yellow"
    //% jres alias=YELLOW_CONCRETE
    YellowConcrete = 262380,
    //% blockIdentity="blocks.block" enumval=131308 block="magenta"
    //% jres alias=MAGENTA_CONCRETE
    MagentaConcrete = 131308,
    //% blockIdentity="blocks.block" enumval=196844 block="light blue"
    //% jres alias=LIGHT_BLUE_CONCRETE
    LightBlueConcrete = 196844,
    //% blockIdentity="blocks.block" enumval=327916 block="lime"
    //% jres alias=LIME_CONCRETE
    LimeConcrete = 327916

}

enum ColoredBlockDirection {
    //% block=left alias=LEFT
    Left,
    //% block=right alias=RIGHT
    Right,
    //% block=up alias=UP
    Up,
    //% block=down alias=DOWN
    Down
}

enum ChessBlockDirection {
    //% block=left alias=LEFT
    Left,
    //% block=right alias=RIGHT
    Right,
    //% block=forward alias=FORWARD
    Forward,
    //% block=back alias=BACK
    Back
}

enum MovementBlock {
    Forward = Block.PinkConcrete,
    Back = Block.GrayConcrete,
    Left = Block.LightBlueConcrete,
    Right = Block.YellowConcrete,
    Up = Block.OrangeConcrete,
    Down = Block.MagentaConcrete,
    Invalid = Block.Bedrock
}

enum ChessKingMovementBlock {
    Forward = Block.OrangeConcrete,
    Back = Block.MagentaConcrete,
    Left = Block.LightBlueConcrete,
    Right = Block.YellowConcrete,
    Invalid = Block.Bedrock
}

enum ChessQueenMovementBlock {
    Forward = Block.LimeConcrete,
    Back = Block.PinkConcrete,
    Left = Block.GrayConcrete,
    Right = Block.LightGrayConcrete,
    Invalid = Block.Bedrock
}

// global variables
const placeBlockMechanicsCommunicationPos = world(0, 64, 0)
const weightDropPosition = world(27, 27, 33)
const communicationsTimeout = 100

const directions = [
    UP,
    DOWN,
    LEFT,
    RIGHT
];

//%  block="Hour of Code 2022" weight=200 color=#6100ff icon="\u26EB"
namespace hoc22 {

    /**
     * Summon colored blocks (POC1-a)
     */
    //% block="drop %b block"
    export function summonColoredBlock(b: ColoredBlocks): void {

        blocks.place(b, placeBlockMechanicsCommunicationPos);

    }


    /**
     * Summon weight (POC1-b)
     */
    //% block="summon %w weight"
    export function summonWeight(w: Weight): void {

        mobs.spawn(w, weightDropPosition);

    }

    /**
     * Agent Move (POC1-c)
     */
    //% block="agent move %d by %n"
    export function agentMove(d: SixDirection, n: number): void {
        agent.move(d, n)
    }

    /**
     * Place Block
     */
    //% block="place block"
    export function placeBlock(): void {
        placeBlockSignal()
    }

    /**
     * Baking Bread Harvest Wheat
     */
    //% block="harvest wheat"
    export function bakingBreadWheat(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Mill Wheat
     */
    //% block="mill wheat"
    export function bakingBreadGrain(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Make Dough
     */
    //% block="make dough"
    export function bakingBreadDough(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
     * Baking Bread Bake Into Bread
     */
    //% block="bake into bread"
    export function bakingBreadBread(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Teleport to Light Blue Lever
     */
    //% block="teleport to light blue lever"
    export function teleportLightBlueLever(): void {
        player.teleport(world(13, 71, 71))
        loops.pause(1000)
    }
    /**
     * Teleport to Magenta Lever
     */
    //% block="teleport to magenta lever"
    export function teleportMagentaLever(): void {
        player.teleport(world(23, 71, 71))
        loops.pause(1000)
    }
    /**
     * Teleport to Yellow Lever
     */
    //% block="teleport to yellow lever"
    export function teleportYellowLever(): void {
        player.teleport(world(11, 71, 71))
        loops.pause(1000)
    }
    /**
     * Teleport to Orange Lever
     */
    //% block="teleport to orange lever"
    export function teleportOrangeLever(): void {
        player.teleport(world(21, 71, 71))
        loops.pause(1000)
    }
    /**
      * Feed The House Apple
      */
    //% block="feed house apple"
    export function feedHouseApple(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Feed The House Salmon
      */
    //% block="feed house salmon"
    export function feedHouseSalmon(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Feed The House Mushroom Stew
      */
    //% block="feed house mushroom strew"
    export function feedHouseMushroomStew(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Dinner Table Swap Red
      */
    //% block="swap red plates"
    export function dinnerTableSwapRed(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Green
      */
    //% block="swap green plates"
    export function dinnerTableSwapGreen(): void {
        blocks.place(Block.GreenConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Blue
      */
    //% block="swap blue plates"
    export function dinnerTableSwapBlue(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Dinner Table Swap Yellow
      */
    //% block="swap yellow plates"
    export function dinnerTableSwapYellow(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
      * Mosaic Push Up
      */
    //% block="push blocks up"
    export function mosaicPushUp(): void {
        blocks.place(Block.OrangeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Down
      */
    //% block="push blocks down"
    export function mosaicPushDown(): void {
        blocks.place(Block.MagentaConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push Left
      */
    //% block="push blocks left"
    export function mosaicPushLeft(): void {
        blocks.place(Block.LightBlueConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    /**
      * Mosaic Push right
      */
    //% block="push blocks right"
    export function mosaicPushRight(): void {
        blocks.place(Block.YellowConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    /**
     * Cursor Move
     */
    //% block="cursor move %direction"
    export function cursorMove(direction: ColoredBlockDirection): void {
        moveCursorInDirection(direction)
    }

    /**
     * Move King
     */
    //% block="move King %direction"
    export function kingMove(direction: ChessBlockDirection): void {
        moveKingChessInDirection(direction)
    }
    /**
     * Move Queen
     */
    //% block="move Queen %direction"
    export function queenMove(direction: ChessBlockDirection): void {
        moveQueenChessInDirection(direction)
    }

    // helper functions
    function resetSignal(): void {
        blocks.place(Block.WhiteConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function placeBlockSignal(): void{
        blocks.place(Block.LimeConcrete, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function moveCursorInDirection(direction: ColoredBlockDirection) {
        const block = convertDirectionToMovementBlock(direction)

        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function moveKingChessInDirection(direction: ChessBlockDirection) {
        const block = convertKingChessDirectionToMovementBlock(direction)

        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }
    function moveQueenChessInDirection(direction: ChessBlockDirection) {
        const block = convertQueenChessDirectionToMovementBlock(direction)

        blocks.place(block, placeBlockMechanicsCommunicationPos)
        loops.pause(communicationsTimeout)
    }

    function convertDirectionToMovementBlock(direction: ColoredBlockDirection) : MovementBlock {
        switch(direction) {
            case ColoredBlockDirection.Left:
                return MovementBlock.Left
            case ColoredBlockDirection.Right:
                return MovementBlock.Right
            case ColoredBlockDirection.Up:
                return MovementBlock.Up
            case ColoredBlockDirection.Down:
                return MovementBlock.Down
        }

        return MovementBlock.Invalid
    }

    function convertKingChessDirectionToMovementBlock(direction: ChessBlockDirection): ChessKingMovementBlock {
        switch (direction) {
            case ChessBlockDirection.Left:
                return ChessKingMovementBlock.Left
            case ChessBlockDirection.Right:
                return ChessKingMovementBlock.Right
            case ChessBlockDirection.Back:
                return ChessKingMovementBlock.Back
            case ChessBlockDirection.Forward:
                return ChessKingMovementBlock.Forward
        }

        return ChessKingMovementBlock.Invalid
    }

    function convertQueenChessDirectionToMovementBlock(direction: ChessBlockDirection): ChessQueenMovementBlock {
        switch (direction) {
            case ChessBlockDirection.Left:
                return ChessQueenMovementBlock.Left
            case ChessBlockDirection.Right:
                return ChessQueenMovementBlock.Right
            case ChessBlockDirection.Back:
                return ChessQueenMovementBlock.Back
            case ChessBlockDirection.Forward:
                return ChessQueenMovementBlock.Forward
        }

        return ChessQueenMovementBlock.Invalid
    }
}