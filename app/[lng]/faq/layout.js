import { translation } from '@/app/i18n-index.js';
import Link from 'next/link';

export default async function FAQ({ params , children }) {
    const { lng } = await params;
    const { t } = await translation(lng, "faq");
    const pages = ["student", "teacher", "parent"];
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center w-full flex-col gap-6 text-gray-900 dark:text-white">
                <h1 className="font-bold text-3xl text-center">
                    {t("faq")}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pages.map((page) => (
                        <Link
                            key={page}
                            href={`/${lng}/faq/${page}`}
                            className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full shadow-md p-2 text-center transition-colors duration-300"
                        >
                            <h2 className="text-xl font-bold">{t(page)}</h2>
                        </Link>
                    ))}
                </div>
                {children}
            </div>
        </div>
    );
};