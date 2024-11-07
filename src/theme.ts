import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#009AC8",
            dark: "#006C8C",
            light: "#66C2DE",
            "100": "#CCEBF4",
            "200": "#99D7E9",
            "300": "#66C2DE",
            "400": "#33AED3",
            "500": "#009AC8",
            "600": "#008BB4",
            "700": "#006C8C",
            "800": "#004D64",
            "900": "#002E3C",
        },
        grey: {
            "100": "#FAFBFC",
            "200": "#F6F8FA",
            "300": "#E1E4E8",
            "400": "#D1D5DA",
            "500": "#959DA5",
            "600": "#6A737D",
            "700": "#586069",
            "800": "#444D56",
            "900": "#2F363D",
        },
    },
    typography: {
        allVariants: {
            fontWeight: 400,
            color: "#28292C",
        },
        h1: {
            fontSize: "36px",
            lineHeight: "46.15px",
        },
        h2: {
            fontSize: "30px",
            lineHeight: "38.46px",
        },
        h3: {
            fontSize: "24px",
            lineHeight: "30.77px",
        },
        h4: {
            fontSize: "20px",
            lineHeight: "25.64px",
        },
        h5: {
            fontSize: "18px",
            lineHeight: "23.08px",
        },
        h6: {
            fontSize: "16px",
            lineHeight: "20.51px",
        },
        body1: {
            fontSize: "18px",
            lineHeight: "23.4px",
        },
        body2: {
            fontSize: "16px",
            lineHeight: "20.8px",
        },
        caption: {
            fontSize: "12px",
            lineHeight: "15.6px",
        },
        subtitle1: {
            fontSize: "14px",
            lineHeight: "17.95px",
        },
        subtitle2: {
            fontSize: "12px",
            lineHeight: "15.38px",
        },
    },

    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "contained" },
                    style: {
                        "&:disabled": {
                            backgroundColor: "#E1E4E8",
                        },
                    },
                },
                {
                    props: { variant: "text" },
                    style: {
                        "&:disabled": {
                            color: "#6A737D",
                        },
                    },
                },
                {
                    props: { variant: "outlined" },
                    style: {
                        "&:disabled": {
                            color: "#6A737D",
                            border: "1px solid #6A737D",
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    boxShadow: "none",
                    textTransform: "capitalize",
                    "&:hover": {
                        boxShadow: "none",
                    },
                    "&:acitve": {
                        boxShadow: "none",
                    },
                    "&:focus": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    width: 341,
                    height: 18,
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "18.2px",
                    color: "#444D56",
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "::before": {
                        display: "none",
                    },
                    "::after": {
                        display: "none",
                    },
                },
            },
        },

        MuiInput: {
            styleOverrides: {
                root: {
                    width: 341,
                    height: 38,
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#2F363D",
                    background: "#ffff",
                    border: "1.5px solid #E1E4E8",
                    padding: "0px 10px",

                    "&:hover": {
                        borderColor: "#009AC8",
                    },
                    "&.Mui-focused": {
                        borderColor: "#009AC8",
                    },
                    "&.Mui-error": {
                        borderColor: "#ED5454",
                    },
                },
            },
        },
    },
});

export default theme;