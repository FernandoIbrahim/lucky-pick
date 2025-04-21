import IconButton from "@/components/utils/icon-button";

export default function Navbar(){

    return (
        <nav className="fixed top-0 left-0 w-full flex flex-row items-center h-20 justify-between z-100 bg-stone-100 gap-1 text-black">
          <div className="left-10 flex relative">
            <IconButton content="home" title="Home"  mainUrl="/home"/>
          </div>
      
          <div className="mr-20 relative">
            <ul className="flex flex-row gap-x-[3vw] items-center">
              <li>
                <IconButton content="wrote-document" title="History" mainUrl="/matches-ranking"/>
              </li>
            </ul>
          </div>
        </nav>
    );

}