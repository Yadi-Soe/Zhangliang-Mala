"useclient"

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";


function LogoutBtn() {

  return (
    <Button className="bg-gray-900 border border-gray-400 rounded-none text-white hover:bg-[#EC6C00]">
      <LogOut />
      Logout
    </Button>
  )
}

export default LogoutBtn
