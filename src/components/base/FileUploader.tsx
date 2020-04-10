import React, { FC, useCallback } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDropzone } from "react-dropzone";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(2),
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: "rgba(0, 0, 0, 0.40);",
      borderRadius: 4,
      color: "rgba(0, 0, 0, 0.40);",
      width: 400,
      height: 300,
      textAlign: "center",
      "&:hover": {
        cursor: "pointer",
        opacity: 0.7
      }
    }
  })
);

type Props = {
  onDropFiles: any;
};

const FileUploader: FC<Props> = ({ onDropFiles }) => {
  const ACCEPT_TYPES = "image/jpeg,image/png";
  const ACCEPT_FILE_SIZE = 2000000;

  const classes = useStyles();
  const onDrop = useCallback(acceptedFiles => {
    onDropFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPT_TYPES,
    maxSize: ACCEPT_FILE_SIZE
  });

  return (
    <div {...getRootProps()} className={classes.container}>
      <input id="input" {...getInputProps()} />
      <Box mt={1}>
        <CloudUploadIcon fontSize="large" color="disabled" />
      </Box>
      <Box mt={2}>
        {!isDragActive ? (
          <Box>
            <Typography variant="subtitle1">画像をドラッグ&ドロップしてください</Typography>
          </Box>
        ) : (
          <Typography variant="subtitle1">画像をドロップしてください</Typography>
        )}
        <Typography variant="caption">（PNG、JPEG、2MB以下をサポートしています）</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body2">自社のクラウドストレージと連携したい場合は</Typography>
        <Typography variant="body2">弊社にお問い合わせください。</Typography>
      </Box>
      <Box mt={4}>
        <label htmlFor="input">
          <Button variant="contained" color="primary" disableElevation>
            画像をアップロード
          </Button>
        </label>
      </Box>
    </div>
  );
};

export default FileUploader;
