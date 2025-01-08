"use client";  
import {  
  DropdownMenu,  
  DropdownMenuContent,  
  DropdownMenuItem,  
  DropdownMenuSeparator,  
  DropdownMenuTrigger,  
} from "@/components/ui/dropdown-menu";  
import Link from "next/link";  
  
export interface DropdownItem {  
  label?: string; // label bersifat opsional  
  isSeparator?: boolean; // isSeparator bersifat opsional  
  url?: string;  
}  
  
export interface DropDownProps {  
  menutriggered: string;  
  items: DropdownItem[];  
}  
  
const Dropdown: React.FC<DropDownProps> = ({ menutriggered, items }) => {  
  return (  
    <DropdownMenu>  
      <DropdownMenuTrigger>{menutriggered}</DropdownMenuTrigger>  
      <DropdownMenuContent>  
        {items.map((item, index) => {  
          if (item.isSeparator) {  
            return <DropdownMenuSeparator key={index} />;  
          }  
          return (  
            <DropdownMenuItem key={index}>  
              {item.url ? (  
                <Link href={item.url} passHref>  
                  {item.label}  
                </Link> // Menggunakan Link untuk navigasi  
              ) : (  
                item.label  
              )}  
            </DropdownMenuItem>  
          );  
        })}  
      </DropdownMenuContent>  
    </DropdownMenu>  
  );  
};  
  
export default Dropdown;  
