import {Button} from "@/components/ui/button"
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

const menuList = [
    {
        name:"豆漿",
        price:"$25"
    },
    {
        name:"油條",
        price:"$30"
    }
];

export default function MenuPage(){
return(
    <div>
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold mb-4">菜單管理</h1>
            <Button className="bg-blue-700 hover:bg-yellow-600">新增</Button>
        </div>
        <div className="bg-slate-500 p-4 rounded-lg shadow mb-4">
            <h2>早餐</h2>
            <table>
            
                <TableHeader >
                    <TableRow className=" bg-emerald-600">                
                        <TableHead className="text-black">品項</TableHead>
                        <TableHead className="text-black">價格</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {menuList.map((menu)=>(
                        <TableRow key={menu.name}>
                            <TableCell>{menu.name}</TableCell>
                            <TableCell>{menu.price}</TableCell>
                        </TableRow>))
                    }   
                </TableBody> 
           
            </table>
        </div>
    </div>
)
}
