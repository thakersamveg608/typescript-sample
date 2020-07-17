let displayName: string = "Samveg's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
// let originalCost: number = 425;
// originalCost = "hello"; // Error if line 5, 6 are uncommented
// let originalCost = 425 as number;
let originalCost = 425 as any;
// originalCost = "hello";//No error if uncommented
enum InventoryItemType {
    Computer = "computer",
    Furniture = "furniture"
}

type cost = string | number;//custom type

interface InventoryItem{
    displayName: string;
    // inventoryType: InventoryItemType;//Can also be used
    inventoryType: "computer" | "furniture";
    trackingNumber: string;
    createDate: Date;
    // originalCost?: number;//Original cost is not compulsory but should be a number if exist
    // originalCost?: number | string;//can be done like this
    originalCost?: cost;

    // addNote(note: string): string;//Same as below
    addNote?:(note: string)=> string;
}

function getInventoryItem(trackingNumber: string): InventoryItem{
    return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();

// saveInventoryItem(inventoryItem);
saveInventoryItem({
    displayName: "macBook pro 15 inch",
    // inventoryType: InventoryItemType.Computer,
    inventoryType: "computer",
    trackingNumber: "FD123456",
    createDate: new Date(),
    originalCost: 199000
});

// function clone(source: InventoryItem): InventoryItem {
//     const serialized = JSON.stringify(source);
//     return JSON.parse(serialized);
// }
function clone<T>(source: T): T {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}

// const cloned = clone(inventoryItem);//For the commented clone function. Output type not statically defined
// const cloned = clone<InventoryItem>(inventoryItem);//Specifically telling the return type
const cloned = clone(inventoryItem);//letting typescript find out about return type

declare var Vue: any;