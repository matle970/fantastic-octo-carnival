declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: './dashboard', title: '首頁總覽',  icon: 'home', class: '' },
    { path: './customer', title: '客戶視圖',  icon:'view_quilt', class: '' }
];