# Scripts

Helper scripts for the Nova Public Notices project.

## Guidelines

- Use descriptive names
- Document script purpose and usage
- Include error handling
- Make scripts executable where appropriate
- Test scripts before committing

## Allowed Script Types

- Shell scripts (`.sh`)
- Python scripts (`.py`)
- Node.js scripts (`.js`, `.mjs`)
- Build/deployment scripts
- Data transformation scripts
- Development utilities

## Example Structure

```
/scripts/
  build/
    generate-sitemap.sh
    optimize-images.sh
  dev/
    seed-data.js
    reset-db.sh
  deploy/
    deploy-staging.sh
    deploy-production.sh
```

## Usage Documentation

Each script should include:
- Purpose comment at the top
- Usage examples
- Required parameters
- Dependencies
- Error codes

## Do Not Include

- Application source code (belongs in `/src/`)
- Build artifacts
- Temporary files
- Credentials or secrets
