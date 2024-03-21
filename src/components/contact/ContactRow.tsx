import { ContactsType } from "@/pages/Contact";
import { TableCell, TableRow } from "../ui/table";


export default function ContactRow({contact}: {contact: ContactsType}) {
    const number: number = +contact.phone.replace(/\s/g, "");
    return (
        <TableRow className="w-full rounded-sm grid grid-cols-3 items-center">
            <TableCell className=" py-7 text-left">{contact.name}</TableCell>
            <TableCell className=" text-gray-500">{contact.role}</TableCell>
            <TableCell className=" text-right hover:underline underline-offset-2 cursor-pointer">
                <a href={`tel:${number}`}>{contact.phone}</a>
            </TableCell>
        </TableRow>
    )
}