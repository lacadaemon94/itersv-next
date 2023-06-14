import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styles from "../../../styles/footer.module.css";

type EmailCopyProps = {
  email: string;
};

const EmailCopy: React.FC<EmailCopyProps> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div>
      <CopyToClipboard text={email} onCopy={handleCopyClick}>
        <button className={styles.emailbutton}>
          {email}
          <div className={styles.decoration} ></div>
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: 'spring', duration: 0.3 }}
                className={styles.copied}
              >
                Correo copiado!
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default EmailCopy;
