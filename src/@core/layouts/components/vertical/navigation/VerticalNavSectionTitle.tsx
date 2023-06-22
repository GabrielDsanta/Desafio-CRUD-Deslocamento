import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiListSubheader from "@mui/material/ListSubheader";
import Translations from "../../../../../layouts/components/Translations";

interface ListSubheaderProps {
  children?: React.ReactNode;
};

const ListSubheader = styled((props: ListSubheaderProps) => (
  <MuiListSubheader component="li" {...props} />
))(({ theme }) => ({
  lineHeight: 1,
  display: "flex",
  position: "static",
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(2),
  backgroundColor: "transparent",
}));

const TypographyHeaderText = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  lineHeight: "normal",
  letterSpacing: "0.21px",
  textTransform: "uppercase",
  fontWeight: theme.typography.fontWeightMedium,
}));

const VerticalNavSectionTitle = (props) => {
  const { item, navHover, settings, collapsedNavWidth, navigationBorderWidth } =
    props;
  const { mode, navCollapsed } = settings;

  const conditionalColors = () => {
    if (mode === "semi-dark") {
      return {
        "& .MuiTypography-root": {
          color: `rgba(#64777a, 0.38)`,
        },
        "& .MuiDivider-root:before, & .MuiDivider-root:after, & hr": {
          borderColor: `rgba(#64777a, ${
            navCollapsed && !navHover ? 0.3 : 0.12
          })`,
        },
      };
    } else {
      return {
        "& .MuiTypography-root": {
          color: "text.disabled",
        },
        "& .MuiDivider-root:before, & .MuiDivider-root:after, & hr": {
          borderColor: `rgba(#64777a, ${
            navCollapsed && !navHover ? 0.3 : 0.12
          })`,
        },
      };
    }
  };

  return (
    <ListSubheader
      sx={{
        ...conditionalColors(),
        ...(navCollapsed && !navHover
          ? {
              py: 3.5,
              pr: (collapsedNavWidth - navigationBorderWidth - 24) / 8 - 1,
              pl: (collapsedNavWidth - navigationBorderWidth - 24) / 8 + 0.25,
            }
          : { px: 0, py: 1.75 }),
      }}>
      <Divider
        textAlign="left"
        sx={{
          m: 0,
          lineHeight: "normal",
          ...(navCollapsed && !navHover
            ? { width: 22 }
            : {
                width: "100%",
                textTransform: "uppercase",
                "&:before, &:after": { top: 7, transform: "none" },
                "& .MuiDivider-wrapper": {
                  px: 2.5,
                  fontSize: "0.75rem",
                  letterSpacing: "0.21px",
                },
              }),
        }}>
        {navCollapsed && !navHover ? null : (
          <TypographyHeaderText noWrap>
            <Translations text={item.sectionTitle} />
          </TypographyHeaderText>
        )}
      </Divider>
    </ListSubheader>
  );
};

export default VerticalNavSectionTitle;
