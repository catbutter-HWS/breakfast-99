import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import  Link  from "next/link"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const inventoryList = [
    {
        name:"黃豆",
        stock:20,
        minStock:15
    },
    {
        name:"麵團",
        stock:7,
        minStock:10,
    },
    {
        name:"培根",
        stock:17,
        minStock:15,
    }
];

export default function Inventory(){
    return(
        <div className="p-8 mb-4">
            <div className="flex flex-col justify-between items-start mb-6">
                <h1 className="text-2xl font-bold">庫存總覽
                
               </h1>
                <Button asChild>
                    <Link href="/Inventory/new">修改</Link>
                </Button> 
            </div>
        
            <div>
                <table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>材料品項</TableHead>
                            <TableHead>庫存量</TableHead>
                            <TableHead>狀態</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { inventoryList.map((inventory) => (
                            <TableRow key={inventory.name}>
                                <TableCell>{inventory.name}</TableCell>
                                <TableCell>
                                    <Badge variant="Outline" className={inventory.stock<=inventory.minStock?"bg-red-600":"bg-blue-600"}>{inventory.stock}</Badge>
                                </TableCell>
                                <TableCell >
                                    <Badge variant="Outline" 
                                        className={inventory.stock<=inventory.minStock?"bg-red-600":"bg-blue-600"}>{inventory.stock<=inventory.minStock?"庫存不足":"庫存充足"}</Badge>
                                </TableCell>
                            </TableRow>
                        )) }
                        
                    </TableBody>
                </table>
            </div>
        </div>
    )
}
