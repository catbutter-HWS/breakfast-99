import { Button } from "@/components/ui/button"
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
import { Badge } from "@/components/ui/badge"



const orderList = [
    {
        id:"Ord-001",
        status:"準備中",
        total:"50",
        table:"1號桌"
    },
    {
        id:"Ord-002",
        status:"完成",
        total:"150",
        table:"外帶"
    },
    {
        id:"Ord-003",
        status:"準備中",
        total:"75",
        table:"2號桌"
    }
]
  
export default function OrdersPage(){
    return(
        <div className="p-8">
            <div className="flex flex-col justify-between items-start mb-6">
                <h1 className="text-2xl font-bold">訂單總覽
                    
                </h1>
                <Button asChild>
                    <Link href="/orders/new">新增</Link>
                </Button> 
            </div>
            <div>
                <table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>訂單編號</TableHead>
                            <TableHead>狀態</TableHead>
                            <TableHead>金額</TableHead>
                            <TableHead>桌號/類型</TableHead>
                            <TableHead>操作</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { orderList.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>
                                    <Badge variant="Outline" className={order.status=="準備中"?"bg-red-600":"bg-blue-600"}>{order.status}</Badge>
                                </TableCell>
                                <TableCell>{order.total}</TableCell>
                                <TableCell>{order.table}</TableCell>
                                <TableCell >
                                    <Button className="mr-2 hover:bg-blue-600 text-white">查看
                                    </Button>
                                    <Button className="mr-2 hover:bg-red-600 text-white">取消</Button>
                                </TableCell>
                            </TableRow>
                        )) }
                        
                    </TableBody>
                </table>
            </div>

        </div>
    )
}