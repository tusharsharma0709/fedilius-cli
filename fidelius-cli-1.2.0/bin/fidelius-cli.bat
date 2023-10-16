#!/bin/bash

# Resolve the script's directory
DIRNAME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_BASE_NAME=$(basename "$0")
APP_HOME="$DIRNAME"

# Add default JVM options here. You can also use JAVA_OPTS and FIDELIUS_CLI_OPTS to pass JVM options to this script.
DEFAULT_JVM_OPTS=""

# Find java
if [ -n "$JAVA_HOME" ] ; then
  JAVA_EXE="$JAVA_HOME/bin/java"
else
  JAVA_EXE="java"
fi

# Check if java executable exists
if [ ! -x "$JAVA_EXE" ]; then
  echo "ERROR: Java executable not found. Please set JAVA_HOME or ensure 'java' is in your PATH."
  exit 1
fi

# Setup classpath
CLASSPATH="$APP_HOME/lib/fidelius-cli-1.2.0.jar:$APP_HOME/lib/bcprov-jdk18on-1.71.jar:$APP_HOME/lib/gson-2.9.0.jar"

# Execute fidelius-cli
"$JAVA_EXE" $DEFAULT_JVM_OPTS $JAVA_OPTS $FIDELIUS_CLI_OPTS -cp "$CLASSPATH" com.mgrm.fidelius.FideliusApplication "$@"
