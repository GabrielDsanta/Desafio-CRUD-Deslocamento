import Box from "@mui/material/Box";

interface TextBoxProps {
    title: string;
    detail: string;
}

export function TextBox({ detail, title }: TextBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: -5
      }}>
      <h4>{title}: {detail}</h4>
    </Box>
  );
}
