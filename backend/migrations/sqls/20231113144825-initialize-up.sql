-- File migrasi up
ALTER TABLE job
ADD COLUMN expertise_temp VARCHAR(255);

-- Mengisi kolom expertise_temp dengan nilai dari kolom expertise_id
UPDATE job
SET expertise_temp = expertise_id::VARCHAR(255);

-- Menghapus kolom expertise_id
ALTER TABLE job
DROP COLUMN expertise_id;

-- Mengubah nama kolom expertise_temp menjadi expertise
ALTER TABLE job
RENAME COLUMN expertise_temp TO expertise;
