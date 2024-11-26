import Link from "next/link";
import Tab from "@mui/material/Tab";
import { theme } from "@/app/theme";

export  const LinkTab = ({label, href, value, selected}) => {
    return (
        <Link legacyBehavior>
            { selected ? (
                <Tab
                label={label}
                value={value}
                className="Mui-selected"
                sx={{ color: theme.palette.primary.main }}
                />
                ) : (
                <Tab
                label={label}
                value={value}
                />
                )
            }
        </Link>
    )
}
