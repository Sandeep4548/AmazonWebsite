import React, { useContext, useEffect, useState } from "react";
import "./navbaar.css";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { Logincontext } from "../context/Contextprovider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useHistory } from "react-router";
import Rightheader from "./Rightheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { account, setAccount } = useContext(Logincontext);
  const history = useHistory("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
//serch filter 
  const [text, setText] = useState("");
  const [liopen, setLiopen] = useState(true);

  const { products } = useSelector((state) => state.getProductsdata);
  const [dropen, setDropen] = useState(false);

  const getdetailvaliduser = async () => {
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();

    if (res.status !== 201) {
      console.log("error");
    } else {
      console.log("data valid");
      setAccount(data);
    }
  };

  const handelopen = () => {
    setDropen(true);
  };

  const handelclose = () => {
    setDropen(false);
  };

  const logoutuser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data2 = await res2.json();

    if (!res2.status === 201) {
      const error = new Error(res2.error);
      throw error;
    } else {
      setAccount(false);
      toast.success("user Logout 😃!", {
        position: "top-center",
      });
      history.push("/");
    }
  };

  const getText = (items) => {
    setText(items);
    setLiopen(false);
  };

  useEffect(() => {
    getdetailvaliduser();
  }, []);

  return (
    <header>
      <nav>
        <div className="left">
          <IconButton className="hamburgur" onClick={handelopen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>

          <Drawer open={dropen} onClose={handelclose}>
            <Rightheader logclose={handelclose} logoutuser={logoutuser} />
          </Drawer>

          <div className="navlogo">
            <NavLink to="/">
              {" "}
              <img src="../amazon_PNG25.png" alt="Logo" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input
              type="text"
              name=""
              onChange={(e) => getText(e.target.value)}
              placeholder="Search on Amazon"
            />
            <div className="search_icon">
              <Search id="search" />
            </div>

            {text && (
              <List className="extrasearch" hidden={liopen}>
                {products
                  .filter((product) =>
                    product.title.longTitle
                      .toLowerCase()
                      .includes(text.toLowerCase())
                  )
                  .map((product) => (
                    <ListItem key={product.id}>
                      <NavLink
                        to={`/getproductione/${product.id}`}
                        onClick={() => setLiopen(true)}
                      >
                        {product.title.longTitle}
                      </NavLink>
                    </ListItem>
                  ))}
              </List>
            )}
          </div>
        </div>

        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">signin</NavLink>
          </div>
          <div className="cart_btn">
            {account ? (
              <NavLink to="/buynow">
                <Badge
                  badgeContent={account?.carts?.length || 0}
                  color="primary"
                >
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Badge
                  badgeContent={account?.carts?.length || 0}
                  color="primary"
                >
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            )}

            <ToastContainer />
            <p>Cart</p>
          </div>
          {account ? (
            <Avatar
              className="avtar2"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {account.fname ? account.fname[0].toUpperCase() : "U"}
            </Avatar>
          ) : (
            <Avatar
              className="avtar"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              U
            </Avatar>
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>

            {account ? (
              <MenuItem onClick={logoutuser}>
                <LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />
                Logout
              </MenuItem>
            ) : (
              " "
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

