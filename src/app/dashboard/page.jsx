import { Button } from "@/components/ui/button"
export default function DashboardPage(){
    return(
    <div>
        <h1  className="text-2xl font-bold mb-4">狀況總覽</h1>
        <Button asChild>管理</Button>
        <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-slate-700 rounded-lg shadow">今日營業額:</div>
            <div className="p-4 bg-slate-700 rounded-lg shadow">未處理訂單:</div>
            <div className="p-4 bg-slate-700 rounded-lg shadow">庫存警告:</div>
        </div>
        
        
    </div>
    )  
    

}