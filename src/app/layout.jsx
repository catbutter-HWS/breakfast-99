import { Inter } from "next/font/google"
import { Dashboard } from "./dashboard/page"

const inter = Inter({
    subsets:["latin"]
,});

import "./globals.css"
import { Sidebar } from "lucide-react";

export const metadata = {
    title:"Manage System V1",
    desc:"一套早餐店管理系統",
};

export default function RootLayout({ children}){
    return(
        <html lang="zh-TW">
            <body className={inter.className}>
                <div className="min-h-screen flex">
                <PageSidebar />
                <div className="flex-1 p-8">
                    {children}
                </div>
                </div>
                
            </body>
        </html>
    );
};

function PageSidebar(){
    return(
        <nav className="w-64 bg-slate-500 p-4 border-r">
            <h2 className="text-xl font=bold mb-6">早餐店管理</h2>
            <div className="space-y-2">
                <NavLink herf="/dashboard">總儀表頁面</NavLink>
                <NavLink herf="/menu">菜單</NavLink>
                <NavLink herf="/orders">訂單</NavLink>
                <NavLink herf="/Inventory">庫存管理</NavLink>
                <NavLink herf="/">標準頁面</NavLink>
            
            </div>
        </nav>
    )
}

function NavLink({herf,children}){
    return(
        <a href={herf}
        className="block px-4 py-2 rounded-md hover:bg-slate-400 transition-colors">
            {children}
        </a>
    )
};