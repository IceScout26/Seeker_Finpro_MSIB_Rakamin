-- File migrasi down
ALTER TABLE job
RENAME COLUMN skill TO expertise_id;

ALTER TABLE job
ALTER COLUMN expertise_id SET NOT NULL;
