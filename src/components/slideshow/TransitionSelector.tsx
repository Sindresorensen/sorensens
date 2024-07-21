import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CheckIcon } from "@heroicons/react/24/outline";

type Props = {
    hasTransition: boolean;
    setHasTransition: (val: boolean) => void;
    className?: string;
    iconClassName?: string;
}

export default function TransitionSelector({ hasTransition, setHasTransition, className, iconClassName }: Props) {

    return <Button variant="outline" 
        id="transitionOn"
        className={cn(
            "p-0 h-6 w-6 border-black hover:bg-transparent group", 
            className
        )}
        onClick={() => setHasTransition(!hasTransition)}
    >
        <CheckIcon className={cn("h-6 hidden group-hover:block", hasTransition && "block", iconClassName)} />
    </Button>
}