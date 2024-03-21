import { ContactsType } from "@/pages/Contact";
import { Table, TableBody } from "../ui/table";
import ContactRow from "./ContactRow";

export default function ContactTable({contacts}: {contacts: ContactsType[]}) {
    return (
        <Table className="">
            <TableBody>
            {contacts.map((contact, i) => {
                return <ContactRow key={i} contact={contact} />
            })}
            </TableBody>
        </Table>
    );
}