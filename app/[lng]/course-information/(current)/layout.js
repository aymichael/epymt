import NavBar from "../navBar";

export default async function CourseLayout({ children, params }) {
    const { lng } = await params;
    return (
        <div className="flex justify-center w-full flex-col gap-8">
            <NavBar lang={lng}/>
            {children}
        </div>
    );
}