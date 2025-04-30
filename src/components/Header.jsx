import React from 'react'

const Header = () => {
  return (
    <div>
    <header>
        <div className="nav bg-black text-white mt-6 w-full h-20 flex justify-between px-20 md:px-20 items-center">
                <div className="logo flex">
                    <a href="/">
                        <img src="/images/logo.png" alt="logo" width="100px" height="100px" />
                    </a>
                </div>
                <ul className="md:flex hidden px-2 py-2">
                    <li className="mx-[10px] font-bold text-lg text-slate-500"><a href="/">Home</a></li>
                    <li className="mx-[10px] hover:text-slate-500"><a href="/product">Product</a></li>
                    <li className="mx-[10px] hover:text-slate-500"><a href="/cart">Cart</a></li>
                    <li className="mx-[10px] hover:text-slate-500"><a href="#">Contact</a></li>
                </ul>
                <div className="flex">
                    <button className="hidden md:block flex items-center gap-2 px-4 py-2 text-white rounded-lg hover:text-slate-500">
                        <i className="fas fa-user"></i>
                        <span><a href="/signup">Login</a></span>
                    </button>  
                </div>
                <div className="md:hidden">
                    <a className="text-4xl" href="#">&#8801;</a>
                </div>
            </div>
    </header>
      
    </div>
  )
}

export default Header
