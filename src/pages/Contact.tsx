import ContactTable from "@/components/contact/ContactTable";
import Title from "@/components/general/Title";
import { Card, CardContent } from "@/components/ui/card";


export type ContactsType = {
    name: string;
    role: string;
    phone: string;
}

const contacts: ContactsType[] = [
    { name: "Sindre Sørensen", role: "Brudgom <3", phone: "472 65 774" },
    { name: "Hanna Jess Tjøstheim", role: "Brud <3", phone: "472 72 840" },
    { name: "Vegard Godtfredsen", role: "Toastmaster", phone: "412 11 824" },
    { name: "Marie Tjelle", role: "Toastmaster", phone: "475 23 101" }
]

export default function Contact() {

    return (
        <div className=" z-0 h-full w-full">
            <div className="absolute flex flex-col items-center w-full z-10 gap-8 md:gap-16">
                <div className="flex flex-col items-center mt-24 w-full gap-6 ">
                    <Title>Kontakt</Title>
                </div>
                <Card className="rounded-sm w-11/12 sm:w-3/5">
                    <CardContent className="p-0">
                        <div className="flex flex-col m-4">
                            <ContactTable contacts={contacts} />
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}