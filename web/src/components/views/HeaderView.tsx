import NavBar from "../navigation/NavBar";
import UserAvatar from "../user/UserAvatar";

interface HeaderViewProps{
    activePage?: 'tasks' | 'focus' | 'settings';
}

export default function HeaderView( { activePage }: HeaderViewProps) {
    return (
        <div className="bg-background/30 backdrop-blur-sm border-b border-primary-medium/20 sticky top-0 z-10"> 
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="text-xl font-light text-primary-dark">Taskflow</span>
                    </div> 

                    <NavBar activePage={activePage}/>   
                    <UserAvatar/>
                </div>
            </div>
        </div>
    );
}