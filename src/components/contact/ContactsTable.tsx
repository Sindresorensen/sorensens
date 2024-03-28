import { ContactsType } from "@/pages/Contact";

export default function ContactsTable({contacts}: {contacts: ContactsType[]}) {
    
    return (
        <div className=" flex flex-col gap-10 p-4">
            {contacts.map( (contact) => {
                const number: number = +contact.phone.replace(/\s/g, "");
                return (
                    <div key={contact.name} className="flex items-center justify-between w-full font-light">
                        <div className=" gap-2 sm:gap-2 ">
                            <p className="text-left">{contact.name}</p>
                            {contact.role && <p className="lowercase text-left text-gray-500">({contact.role})</p>}
                        </div>
                        <div className="hover:underline underline-offset-2 cursor-pointer text-right">
                            <a href={`tel:${number}`}>{contact.phone}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}