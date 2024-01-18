# PRODUCTION:
#FROM maven:3.8.4-openjdk-17 AS backend
#WORKDIR /app
#COPY . .
#RUN mvn clean install -DskipTests
#
#FROM openjdk:17-jre # changed to JRE
#WORKDIR /app
#COPY --from=backend /app/target/imf-0.0.1-SNAPSHOT.jar ./app.jar
#
#EXPOSE 8080
#
#CMD ["java", "-jar", "app.jar"]

# DEVELOPMENT:
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy the Maven wrapper and pom.xml
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Fix line endings and set script as executable
RUN apt-get update \
    && apt-get install -y dos2unix \
    && dos2unix ./mvnw \
    && chmod +x ./mvnw

# Resolve dependencies
RUN ./mvnw dependency:resolve

# Copy the source code
COPY src ./src

EXPOSE 8080

CMD ["./mvnw", "spring-boot:run"]

