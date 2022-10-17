import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";

import { Grey, OxfordBlue } from "../color-constants";
import { TitleText } from "../typography/typography";
import { CustomModalProps } from "./interface";
import Style from "./style";

const CustomModal = (props: CustomModalProps) => {
  const { open, onModalClose, title, message, children, actions, footer } =
    props;
  return (
    <>
      <Modal open={open} onClose={onModalClose}>
        <Box
          sx={Style}
          style={{
            justifyContent: "space-around",
            borderRadius: "5px",
            width: "590px",
          }}
        >
          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <IconButton
              sx={{ padding: "0px" }}
              onClick={() => onModalClose(false)}
            >
              <Close sx={{ width: "20px" }} />
            </IconButton>
          </Box>
          <Box mx={2} mt={2}>
            <TitleText text={title} color={OxfordBlue} />
            <p style={{ textAlign: "center" }}>
              <TitleText text={message} color={Grey} />
            </p>
          </Box>
          {children ? <Box p={2}>{children}</Box> : ""}
          {actions && (
            <Box p={2} display="flex" justifyContent="space-between" gap="10px">
              {actions?.map((ele: any) => ele)}
            </Box>
          )}
          {footer ? (
            <Box px={2} pt={0} pb={2}>
              {footer}
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
