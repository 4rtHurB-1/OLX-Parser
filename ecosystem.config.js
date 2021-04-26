module.exports = {
  apps : [{
      "name": "node-appart",
      "args": [
          "index.js"
      ],
      "script": "node",
      "max_memory_restart": "500M",
      "node_args": [],
      "exec_interpreter": "none",
      "exec_mode": "fork",
      "log_file": "logs.log"
  }],
};
