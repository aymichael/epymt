import NavBar from "./navBar";

export default async function CourseLayout({ children, params }) {
    const { lng } = params;
    return (
        <div className="flex justify-center w-full flex-col gap-2">
            <NavBar lang={lng}/>
            {children}
        </div>
    );
}