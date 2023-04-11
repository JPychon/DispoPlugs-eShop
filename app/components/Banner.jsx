export function Banner({title, description}) {
    return(
        <div id="sticky-banner" tabIndex="-1" className="fixed top-0 left-0 z-50 flex justify-between w-full p-1 border-b border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-600">
            <div className="flex items-center mx-auto">
                <p className="flex items-center text-sm font-bold text-gray-500 text-stone-50">
                    <span className="text-red-400">{title}&nbsp;</span><span>{description}</span>
                </p>
            </div>
        </div>
    )
}
