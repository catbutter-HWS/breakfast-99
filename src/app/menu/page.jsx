import {Button} from "@/components/ui/button"


export default function MenuPage(){
return(
    <div>
    <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-4">菜單管理</h1>
        <Button className="bg-blue-700 hover:bg-yellow-600">新增</Button>
    </div>
    <div className="bg-slate-500 p-4 rounded-lg shadow mb-4">
        <h2 >早餐</h2>
        <ul className="flex">
            <li>
                <div>豆漿</div>
                <div>$25</div>
            </li>
            <li>
                <div>油條</div>
                <div>$30</div>
            </li>
        </ul>
    </div>
</div>
)
}
