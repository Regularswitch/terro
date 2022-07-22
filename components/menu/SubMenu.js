import Link from 'next/link';

function SubMenu({categories, bgColor, color}) {
    return (
        <div 
        className="fixed top-20 py-5 rounded-lg drop-shadow-lg w-[200px]"
        style={{
            backgroundColor: color,
            color: bgColor,
            border: "1px solid rgba(0,0,0,.2)"
        }}
        >
            {categories?.map((cat, i) =>
                <div key={cat.slug} className="font-TTHoves capitalize py-2 pl-5 cursor-pointer hover:font-bold hover:bg-[rgba(0,0,0,.09)]">
                    <Link href={`/categoria-produto/${cat.slug}`}>
                        <a>{cat.name}</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default SubMenu