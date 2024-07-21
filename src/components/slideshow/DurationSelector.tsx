import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

type Props = {
    secs: number[];
    seconds: number;
    setSeconds: (val: number) => void;
    className?: string;
}

export default function DurationSelector({ secs, seconds, setSeconds, className }: Props) {
    return (
        <Select onValueChange={(val) => setSeconds(parseInt(val))}>
            <SelectTrigger className={cn("rounded-none", className)}>
                {seconds} s
            </SelectTrigger>
            <SelectContent className=" max-h-80">
                {secs.map(i => <SelectItem value={i.toString()}>{i} s</SelectItem>)}
            </SelectContent>
        </Select>
    )
}