FROM      ubuntu:14.04
MAINTAINER Benoit Wilcox <wilcox.benoit@gmail.com>

RUN apt-get -y update

# install python-software-properties (so you can do add-apt-repository)
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y -q python-software-properties software-properties-common

# Oracle Java 8 installation
###############################
RUN add-apt-repository ppa:webupd8team/java -y
RUN apt-get update
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN apt-get -y install oracle-java8-installer && apt-get clean

# Set oracle java as the default java
RUN update-java-alternatives -s java-8-oracle
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle


# Deploy the application (application server embedded)
#######################################################
ADD target/telosys-tools-saas-*.war telosys-tools-saas/telosys-tools-saas.war

# Port exposition
##################
EXPOSE 8080

# Start the application
#########################
CMD java -jar telosys-tools-saas/telosys-tools-saas.war --spring.profiles.active=prod