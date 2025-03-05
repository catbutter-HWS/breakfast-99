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

  
export default function OrdersPage(){
    return(
        <div>
            <div>
                <h1>訂單總覽</h1>
                <Button asChild>
                    <Link href="/orders/new">新增</Link>
                </Button>
            </div>

        </div>
    )
}